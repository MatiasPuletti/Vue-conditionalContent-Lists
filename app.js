const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: '',
      tasks: [],
      taskListIsVisible: true
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    }
  }
});

app.mount('#assignment');
