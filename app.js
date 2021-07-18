const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    }
  }
});

app.mount('#assignment');
