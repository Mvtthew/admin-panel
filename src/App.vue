<template>
	<div id="app">
		<sidebar />
		<div id="sidebar-fix"></div>
		<div class="main-box">
			<navbar />
			<div class="container-fluid p-4">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
import navbar from "@/components/shared/Navbar.vue";
import sidebar from "@/components/shared/Sidebar.vue";

export default {
	components: {
		navbar,
		sidebar
	},
	watch: {
		$route(to) {
			document.title =
				to.meta.title + " | " + this.$store.getters.getAppName ||
				"Missing meta.title";
		}
	}
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
#app {
	min-height: 100vh;
	position: relative;
	display: flex;
	color: rgba(255, 255, 255, 0.7);

	#sidebar-fix {
		width: $sidebar-width;
		@media screen and(max-width: 700px) {
			width: 0;
		}
	}

	.main-box {
		z-index: 105;
		width: calc(100vw - #{$sidebar-width});
		background-color: $main-box-color;
		@media screen and (max-width: 700px) {
			width: 100%;
		}
	}

	.bx {
		height: 100%;
		&.fix {
			position: relative;
			bottom: -2px;
		}
	}

	.card {
		//z-index: 150;
		border-radius: calc(#{$border-radius} / 2);
		box-shadow: $box-shadow;
		background-color: $card-color;
	}

	a {
		transition: 0.2s all;
		text-decoration: none;
		color: rgba(255, 255, 255, 0.5);
		&:hover {
			color: rgba(255, 255, 255, 1);
		}
	}

	.text-muted {
		color: rgba(255, 255, 255, 0.5) !important;
	}

	.btn {
		border-radius: calc(#{$border-radius} / 3);
	}

	.form-control {
		position: relative;
		background-color: transparent;
		color: rgba(255, 255, 255, 0.7);
		border: 0;
		border-radius: 0;
		border-bottom: 3px solid rgba(255, 255, 255, 0.2);
		&:focus {
			box-shadow: 0 0 transparent !important;
			border-bottom: 3px solid white;
		}
	}
}

// Scrollbar
body::-webkit-scrollbar {
	width: 0.25rem;
	background-color: $main-box-color;
}
body::-webkit-scrollbar-track {
	box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
body::-webkit-scrollbar-thumb {
	background-color: $accent-color;
}
</style>
