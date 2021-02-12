<template>
    <div>
        
        <form class="login" @submit.prevent="login">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</template>

<script>
import authService from '../services/AuthService';

export default {
     name: 'Login',
     components: {
    
     },

    
     methods: {
         onSubmit(){
            authService.add(this.formData)
        },

        async login() {
            console.log(this.credentials);
            const { user, token } = await authService.login(this.credentials);
            console.log('got response', { user, token });
            alert('Hello,' + user.name);
            this.activeUser = user;

            this.$router.push('my-profile');
        }

     },

     created() {
         //console.log({store: this.$store});
         console.log('counter je', this.$store.getters.counter);
     }
    
}
</script>

<style>

</style>
