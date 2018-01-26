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
		<v-layout row wrapc class="mt-2">
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
		data() {
			return {
				meetups: [
					{ imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg/800px-New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg', id: '1', title: 'Meetup in New York'},
					{ imageUrl: 'https://static1.eurocentres.com/cdn/farfuture/83ZTKH3XL9C4xe4PgBNQC23NFo5vn37MvZ_G4sDQ3Zk/mtime:1505483245/sites/default/files/styles/ec_slider_content_breakpoints_theme_ec_responsive_full_1_5x/public/par_eiffel_1400x650.jpg?itok=gCyXICEG&timestamp=1505483222', id: '2', title: 'Meetup in Paris'}
				]
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