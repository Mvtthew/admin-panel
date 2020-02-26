<template>
    <div class="login">
        <div class="login-form-box">
            <div class="login-form">
                <p class="display-4">Login</p>
                <div class="form-group">
                    <input type="text" class="form-control">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
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
        width: 60%;
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: center;

        .login-form{
            width: 50%;
        }
    }
}
</style>