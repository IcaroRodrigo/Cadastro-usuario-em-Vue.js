<template>
	<div class="container ">
		<div class="row justify-content-center margin-top">
			<div class="size-card">
				<div class="card">
					<img class="card-img-top thumb-post img-fluid" src="../img/img_bitcoin.jpeg" alt="Bitcoin">
					<div class="card-body">
						<div class="row ">
							<div class="col form-group" >
								<p class="text-secondary">
									A origem do Bitcoin é tão interessante quanto a sua evolução no mercado. Criada há quase uma década, a moeda virtual alcançou patamares
									históricos de cotações, atraindo ainda mais visibilidade para a economia digital e transformando a criptomoeda em <b>um dos investimentos mais atrativos do momento.</b>
								</p>
							</div>
						</div>
						<div class="row mt-5">
							<div class="col form-group " >
								<div class="box-response rounded">
									<h5>Bitcoin Price Index</h5>
									<br/>
									<p v-for="(item,index) in priceBitCoin" :key="index" class="removeSpace">
										{{ item.description }}: <span v-html="item.symbol"></span> {{parseFloat(item.rate.replace(",","")).toFixed(2)}}
									</p>
								</div>
							</div>
						</div>
						<div class="row mt-5">
							<div class="col form-group">
								<p>
									O grande mistério do Bitcoin ainda não foi revelado. Afinal, quem inventou a criptomoeda? Existem várias versões, mas nenhuma conclusiva até o momento. O que se sabe é que o fundador usa o pseudônimo Satoshi Nakamoto.
								</p>
							</div>
						</div>
					</div> 
				</div>
			</div>
		</div>
		<div class="sac d-none d-sm-block">
			<img src="../img/sac.png" class="img-fluid"/>
			<p class="removeSpace">SAC</p>
		</div>
	</div>
</template>

<script>
import axios from "axios/dist/axios";

export default {
	name: "UserResponse",
	data(){
		return{
			priceBitCoin:[]
		};
	},
	methods:{
		loadUserResponse(){
			axios({
				url:"https://api.coindesk.com/v1/bpi/currentprice.json",
				methods:"get"
			}).then(response => {
				for( const item in response.data.bpi){
					this.priceBitCoin.push(response.data.bpi[item]);
				}
			});
		}
	},
	created(){
		this.loadUserResponse();
	}
};
</script>


<style scoped>
 .size-card{
  width:440px;
}

.card-body{
	padding: 30px 40px;
	font-size:13px;
	/* line-height: 1.5; */
}
.removeSpace{

	padding:0px;
	margin:0px;
}
.box-response{
  background:#07a5b1;
  color:#FFF;
  padding:20px 40px;
}
.thumb-post {
  max-height: 150px;
}
.sac{
	background-color:#FFF;
	-webkit-border-top-left-radius: 35px;
	-webkit-border-bottom-left-radius: 10px;
	-moz-border-radius-topleft: 35px;
	-moz-border-radius-bottomleft: 10px;
	border-top-left-radius: 35px;
	border-bottom-left-radius: 10px;
	font-size: 12px;
	font-weight: bold;
	text-align: center;
	position: fixed;
	right: 0;
	top:50%;
	width:120px;
}
.sac img{
	width:80px;
}
@media (min-width: 600px)
{
	.margin-top{
		margin:50px;
	}
}
</style>
