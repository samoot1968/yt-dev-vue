<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm6 class="text-cs-center text-sm-right">
				<v-btn large to="/meetups" class="primary">Explore Meetup</v-btn>
			</v-flex>
			<v-flex xs12 sm6 class="text-xs-center text-sm-left">
				<v-btn large to="/meetups/new" class="primary">Organize Meetup</v-btn>
			</v-flex>
		</v-layout>
		<v-layout row wrap class="mt-2">
			<v-flex xs12>
				<v-carousel style="cursor:pointer">
			    	<v-carousel-item v-for="meetup in meetups" v-bind:src="meetup.imageUrl" :key="meetup.id" @click="onLoadMeetup(meetup.id)">
			    		<div class="title">
			    			{{ meetup.title }}
			    		</div>
			    	</v-carousel-item>
			    </v-carousel>
			</v-flex>
		</v-layout>
		<v-layout row wrap class="mt-2">
			<v-flex xs12 class="text-xs-center">
				<p>Join our awesome meetups</p>
			</v-flex>
		</v-layout>
	</v-container>
</template>


<script type="text/javascript">
	export default {
		computed: {
			meetups(){
				return this.$store.getters.featuredMeetups
			}
		},
		methods: {
			onLoadMeetup(id) {
				this.$router.push('/meetups/' + id)
			}
		}
	}
</script>
<style scoped>
	.title {
		position: absolute;
		bottom: 50px;
		background-color: rgba(0,0,0,0.5);
		color: white;
		font-size: 2em;
		padding:20px;
	}
</style>