<template>
  <div id="app">
    <v-app>
      <page-header />
      
      <main>
        <v-container fluid>
          
        </v-container>
      </main>
    </v-app>
  </div>
</template>
<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>
