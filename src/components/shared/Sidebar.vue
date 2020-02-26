<template>
	<div class="sidebar">
		<div class="navbar navbar-dark">
			<a class="navbar-brand" href="#">TMM <small>0.3.1221</small></a>
		</div>
		<div class="user mt-4">
			<div class="avatar">
				LW
			</div>
			<p class="username mt-2">
				Leszek Wójcik
			</p>
		</div>
		<div class="list mt-4">
			<router-link to="/" class="element py-2"
				><span class="text">Dashboard</span
				><i class="bx bxs-dashboard"></i
			></router-link>
			<div class="elements-devider py-3"></div>
			<a href="#" class="element py-2"
				><span class="text">Tournaments</span
				><i class="bx bx-calendar-star"></i
			></a>
			<a href="#" class="element py-2"
				><span class="text">Players</span><i class="bx bx-user"></i
			></a>
			<a href="#" class="element py-2"
				><span class="text">Teams</span><i class="bx bx-user-plus"></i
			></a>
			<div class="elements-devider py-3"></div>
			<router-link to="/servers" class="element py-2"
				><span class="text">Servers</span><i class="bx bx-server"></i
			></router-link>
			<div class="elements-devider py-3"></div>
			<a href="#" class="element py-2"
				><span class="text">Nitro</span><i class="bx bx-meteor"></i
			></a>
			<div class="elements-devider py-3"></div>
			<a href="#" class="element py-2"
				><span class="text">Help</span
				><i class="bx bx-comment-error"></i
			></a>
			<a href="#" class="element py-2"
				><span class="text">Account settings</span
				><i class="bx bx-user-check"></i
			></a>
			<a href="#" class="element py-2"
				><span class="text">Logout</span><i class="bx bx-log-out"></i
			></a>
		</div>
	</div>
</template>

<script>
export default {
	name: "sidebar"
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
.sidebar {
	position: fixed;
	top: 0;
	left: 0;
	width: $sidebar-width;
	height: 100%;
	background-color: $sidebar-color;
	z-index: 100;

	.navbar {
		background-color: $navbar-color;
	}

	.user {
		width: 100%;

		.avatar {
			margin: auto;
			height: 120px;
			width: 120px;
			background-color: $accent-color;
			color: whitesmoke;
			font-weight: 300;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 3rem;
			border-radius: 50%;
		}
		.username {
			color: white;
			text-align: center;
		}
	}

	.list {
		.elements-devider {
			width: 90%;
			margin: auto;
			position: relative;
			&:after {
				content: "";
				height: 2px;
				background-color: rgba(255, 255, 255, 0.3);
				width: 100%;
				position: absolute;
				left: 0;
			}
		}
		.element {
			transition: 0.18s all;
			color: rgba(255, 255, 255, 0.5);
			display: flex;
			align-items: center;
			width: 96%;
			margin-left: auto;
			position: relative;
			text-align: center;
			font-size: 1.2rem;
			&:hover,
			&.router-link-exact-active {
				color: rgba(255, 255, 255, 1) !important;
				text-decoration: none;
				&:after {
					border-radius: $border-radius 0 0 $border-radius;
					width: 100%;
					box-shadow: $box-shadow;
				}
			}
			&:after {
				transition: 0.2s all;
				z-index: -1;
				content: "";
				width: 0%;
				height: 100%;
				position: absolute;
				top: 0;
				right: 0;
				background-color: $main-box-color;
			}

			.bx {
				margin: 0 1rem;
			}
			.text {
				text-align: left;
				width: 100%;
				padding-left: 1.5rem;
			}
		}
	}
}
</style>