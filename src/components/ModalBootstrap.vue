<template>
<!-- Modal -->
	<b-modal id="modal-1" v-bind:title="dataModal.title" ref="myModal" @ok="handleOk">
		{{dataModal.body}}
	</b-modal>
</template>
<script>
export default {
	name: "ModalBoostrap", 
	props:["dataModal"],
	methods:{
		showModal(){
			this.$refs["myModal"].show();
		},
		handleOk(){
			this.$emit("redirect");
		}
	}
};
</script>
<style scoped>
</style>