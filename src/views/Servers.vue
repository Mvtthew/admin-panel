<template>
	<div class="servers">
		<h1 class="display-4 mb-4">
			Servers
		</h1>
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