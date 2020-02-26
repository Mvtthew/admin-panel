<template>
	<div class="servers">
		<h1 class="display-4 mb-0">
			Servers
		</h1>
		<p class="mb-4">
			You got <strong>4</strong> servers online and <strong>0</strong> offline. 
		</p>
		<div class="row">
			<server v-for="i in 4" :key="i"></server>
		</div>
	</div>
</template>

<script>
import server from "@/components/cards/Server.vue";
export default {
	name: "servers",
	components: {
		server
	}
};
</script>