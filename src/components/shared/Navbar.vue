<template>
	<nav class="navbar navbar-expand-lg navbar-dark">
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link disabled" href="#">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">Features</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">Pricing</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				</li>
			</ul>
			<ul class="navbar-nav ml-auto">
				<li class="nav-item">
					<a class="nav-link disabled" href="#"><i class='bx bx-user-circle'></i> User</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: "navbar"
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.navbar {
	position: sticky;
	top: 0;
	z-index: 110;
	background-color: $navbar-color;
}
</style>