const app = Vue.createApp({
	data() {
		return { items: null };
	},
	mounted() {
		this.fetchData();
	},
	methods: {
		async fetchData() {
			const response = await fetch("http://localhost:3000/css");

			this.items = await response.json();
		},
	},
	template: `
  <main>
    <div v-if="items" class="content-section" v-for="item in items" :key="item.name">
      <p>
        {{ item.name }}
      </p>
      <div class="content-inner">
        <textarea
          class="content-item"
          :value="item.content.before"
          disabled
        ></textarea>
        <textarea
          class="content-item"
          :value="item.content.after"
          disabled
        ></textarea>
      </div>
    </div>

    <div v-else>
      loading
    </div>
  </main>
  
  `,
});

app.mount("#app");
