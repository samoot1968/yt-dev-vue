<template>
  <v-app>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">ToomasBusiness CMS Portfolio</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="items in menuItems" :key="items.title" :to="items.link">
          <v-icon left>{{ items.icon}}</v-icon>
          {{ items.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-navigation-drawer v-model="sideNav" disable-resize-watcher temporary>
      <v-list v-for="items in menuItems" :key="items.title" :to="items.link">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>{{ items.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ items.title }}
          </v-list-tile-content>
        </v-list-tile> 
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
     sideNav: false,
     menuItems: [
       { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
       { icon: 'room', title: 'Organize Meetup', link: '/meetups/new'},
       { icon: 'person', title: 'Profile', link: '/profile'},
       { icon: 'face', title: 'Sign Up', link: '/signup'},
       { icon: 'lock_open', title: 'Sign In', link: '/signin'},
     ]
    }
  },
  name: 'App'
}
</script>
