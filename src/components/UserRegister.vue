<template>
	<div class="container ">
		<div class="row justify-content-center  margin-top">
			<div class="size-card">
				<div class="card">
					<div class="card-body">
						<div class="row">
							<div class="col" >
								<h4 class="color-cyan">Cadastro de usuário</h4>
								<p class="text-secondary">Utilize esse cadastro para fazer parte do maior site de trade de Bitcoin do mundo.</p>
							</div>
						</div>
						<br/>
						<form @submit.prevent="handleSubmit">
							<div class="form-row">
								<div class="col form-group">
									<label for="name">Nome completo <i class="color-cyan">*</i></label>
									<input type="text" name="name" v-model="name" id="name" class="form-control height-input" :class="{ 'is-invalid': submitted && $v.name.$error }">
									<div v-if="submitted && !$v.name.required" class="invalid-feedback">Nome completo é obrigatório</div>
								</div>
							</div>
							<div class="form-row">
								<div class="col form-group">
									<label for="email">E-mail <i class="color-cyan">*</i></label>
									<input type="email" name="email" v-model="email" id="email" class="form-control height-input" :class="{ 'is-invalid': submitted && $v.email.$error }">
									<div v-if="submitted && !$v.name.required" class="invalid-feedback">E-mail é obrigatório</div>
								</div>
							</div> 
							<div class="form-row">
								<div class="col-md-6 form-group">
									<label for="phone">Telefone <i class="color-cyan">*</i></label>
									<input type="text" name="phone" id="phone" v-model="phone"  v-mask="['(##) ####-####', '(##) #####-####']" class="form-control height-input" :class="{ 'is-invalid': submitted && $v.phone.$error }">
									<div v-if="submitted && !$v.phone.required" class="invalid-feedback">Telefone é obrigatório</div>
								</div>
								<div class="col-md-6 form-group">
									<label for="cpf">CPF <i class="color-cyan">*</i></label>
									<input type="text" name="cpf" id="cpf" v-model="cpf" v-mask="'###.###.###-##'" class="form-control height-input" :class="{ 'is-invalid': submitted && $v.cpf.$error }">
									<div v-if="submitted && !$v.cpf.required" class="invalid-feedback">CPF é obrigatório</div>
								</div>
							</div>  
							<div class="form-row">
								<div class="col-md-6 form-group">
									<label for="zipCode">CEP <i class="color-cyan">*</i></label>
									<input type="text" name="zipCode" id="zipCode" v-model="zipCode" v-mask="'#####-###'"   class="form-control height-input" :class="{ 'is-invalid': submitted && $v.zipCode.$error }">
									<div v-if="submitted && !$v.zipCode.required" class="invalid-feedback">CEP é obrigatório</div>
								</div>
								<div class="col-md-6 form-group">
									<label for="town">Cidade</label>
									<input type="text" name="town" id="town" class="form-control height-input" v-model="town">
								</div>
							</div>   
							<div class="form-row">
								<div class="col form-group">
									<label for="neighborhood">Bairro</label>
									<input type="text" name="neighborhood" id="neighborhood" class="form-control height-input" v-model="neighborhood">
								</div>
							</div>
							<div class="form-row">
								<div class="col-md-6 form-group">
									<label for="street">Logradouro</label>
									<input type="text" name="street" id="street" class="form-control height-input" v-model="street">
								</div>
								<div class="col-md-6 form-group">
									<label for="number">Número</label>
									<input type="text" name="number" id="number" v-model="number" class="form-control height-input">
								</div>
							</div> 
							<div class="form-row">
								<div class="col">
									<button class="btn btn-register text-light font-weight-bold btn-block">CADASTRAR</button>
								</div>
							</div>      
						</form>
					</div> 

				</div>
				<br/>
				
			</div>
		</div>
		<div class="row justify-content-center ">
			<div class="col-md-5">
					<p class="text-light message-cookie">
						Os Cookies são utilizados para facilitar a navegação e torna-la mais simples e não danificam o seu dispositivo. Permitem uma navegação mais rápida
						e eficiente, eliminando a necessidade de introduzir repetidamente as mesmas informações.
					</p>
				</div>
		</div>
		<ModalBootstrap v-bind:dataModal="dataModal" ref="showModal" v-on:redirect="redirect"></ModalBootstrap>
	</div>
</template>

<script>
import ModalBootstrap from "./ModalBootstrap";
import { required } from "vuelidate/lib/validators";
import { cpf } from "cpf-cnpj-validator";
import axios from "axios/dist/axios";

const mustBeCpf = (value) => {
	const valueCpf = value.replaceAll(".","").replace("-","");
	return cpf.isValid(valueCpf);
};

export default {
	name: "UserRegister",
	components:{
		ModalBootstrap
	},
	data(){
		return{
			name:"",
			email:"",
			phone:"",
			cpf:"",
			zipCode:"",
			town:"",
			state:"",
			street:"",
			number:"",
			neighborhood:"",
			submitted: false,
			dataModal:{title:"teste",body:"Sucesso ao realizar cadastro"}
		};
		
	},
	validations: {
		name: {required},
		email: {required},
		phone: {required},
		cpf: {required,mustBeCpf},
		zipCode: {required},
	},
	methods:{
		handleSubmit() {
			this.submitted = true;
			this.$v.$touch();
			if (this.$v.$invalid) {	return;	}
			this.$refs["showModal"].showModal();
		},
		redirect(){
			this.$router.push("/resposta");
		},
		apiViaCep(cep){
			axios({
				url:`https://viacep.com.br/ws/${cep}/json/`,
				methods:"get"
			}).then(response => {
				this.street = response.data.logradouro;
				this.town = response.data.localidade;
				this.neighborhood = response.data.bairro;
			});
		}
	}
};
</script>


<style scoped>
.size-card{
  width:440px;
}
.height-input{
  height:45px;
}
.message-cookie{
  font-size:14px
}
.color-cyan{
  color:#07a5b1;
}
.btn-register{
  background-color:#07a5b1;
}
.card-body label{
  color:#6c757d;
}
@media (min-width: 600px)
{
	.margin-top{
		margin:50px;
	}
}
</style>
