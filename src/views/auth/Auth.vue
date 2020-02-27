<template>
	<div class="login">
		<div class="login-form-box">
			<div class="login-form p-5">
				<p class="display-4">Login</p>
				<div class="form-group">
					<input type="text" class="form-control" name="login" placeholder="E-mail" value="login" />
				</div>
				<div class="form-group">
					<input type="password" class="form-control" name="pass" placeholder="Password" value="123" />
					<a href="#" class="pt-1">Reset password</a>
				</div>
				<div class="form-check">
					<label class="form-check-label">
						<input type="checkbox" class="form-check-input" checked />
						Remember me
					</label>
				</div>
				<router-link to="/dashboard" class="btn btn-outline-success mt-3">
					Login
					<i class="bx bx-log-in fix"></i>
				</router-link>
				<div class></div>
			</div>
			<div class="copyright">
				<p class="m-0">
					<i class="bx bx-copyright fix"></i>
					{{new Date().getFullYear()}} {{$store.getters.getAppName}}
				</p>
				<p class="m-0 version">{{$store.getters.getAppVersion}}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.login {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 200;
	width: 100vw;
	height: 100vh;
	background-color: $sidebar-color;

	.login-form-box {
		background-color: $main-box-color;
		height: 100%;
		width: 80%;
		margin-left: auto;
		display: flex;
		align-items: center;
		justify-content: center;

		.login-form {
			width: 550px;
		}
	}

	.copyright {
		position: absolute;
		bottom: 2rem;
		right: 2rem;

		.version {
			text-align: right;
			font-size: 0.7rem;
		}
	}
}
</style>