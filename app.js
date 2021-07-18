const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: '',
      tasks: [],
      taskListIsVisible: true
    };
  },
  computed: {
    buttonCaption() {
        return this.taskListIsVisible ? 'Hide list' : 'Show list'
    }
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
