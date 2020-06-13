import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    tasks: [
      {
        id: 1,
        title: 'Task 1 title',
        descr: 'Lorem ipsum dolor sit amet'
      },
      {
        id: 2,
        title: 'Another task title',
        descr:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        id: 3,
        title: 'Task 3 title',
        descr:
          'Lorem Ipsum has been the industry standard dummy text ever since the 1500s,\
          when an unknown printer took a galley of type and scrambled it to make a type \
          specimen book.'
      },
      {
        id: 4,
        title: 'Maybe title of task 4',
        descr:
          'It has survived not only five centuries, but also the leap into electronic \
          typesetting, remaining essentially unchanged.'
      }
    ],
    toRemoveArr: [],
    isSorted: false,
    isLoaded: false,
    removeBtnDisabled: true,
    addBtnDisable: true,
    lastTaskID: 4,
    searchTask: ''

  },

  mutations: {
    toRemove(state) {
      state.toRemoveArr.forEach(id => {
        state.tasks.splice(
          state.tasks.indexOf(state.tasks.find(task => task.id === id)),
          1
        );
      });
      state.toRemoveArr = [];
      document.getElementById('taskForm').reset();
      state.removeBtnDisabled = true
    },
    checkTask(state, index) {
      if (state.toRemoveArr.indexOf(index) === -1) {
        state.toRemoveArr.push(index);
      } else {
        state.toRemoveArr.splice(state.toRemoveArr[index], 1);
      }

      if (state.toRemoveArr.length > 0) {
        state.removeBtnDisabled = false
      } else {
        state.removeBtnDisabled = true
      }
    },
    addTask(state, task) {
      state.tasks.push({
        id: state.lastTaskID + 1,
        title: task.title,
        descr: task.descr
      });

      state.lastTaskID++;
      state.addBtnDisable = true
    },
    setAddBtn(state, title) {
      if (title.length > 0) {
        state.addBtnDisable = false
      } else {
        state.addBtnDisable = true
      }
    },
    searchTask(state, payload) {
      state.searchTask = payload
    },
    isSorted(state, payload) {
      state.isSorted = payload
    },
    isLoaded(state) {
      console.log('isLoaded');
      state.isLoaded = true
    }
  },

  actions: {
    asyncLoadTasks(context) {
      let promise = new Promise(resolve => {
        return setTimeout(resolve, 3000);
      });
      promise.then(() => {
        context.commit('isLoaded')
      }
      )
    }
  },

  getters: {
    getTask(state) {
      return {
        tasks: this.filteredTasks,
        removeBtnDisabled: state.removeBtnDisabled
      };
    },
    filteredTasks(state) {
      return state.tasks.filter(task => {
        return (
          task.title.toLowerCase().indexOf(state.searchTask) > -1 ||
          task.descr.toLowerCase().indexOf(state.searchTask) > -1
        );
      }).sort((a, b) => {
        if (!state.isSorted) {
          return a.id - b.id;
        } else if (state.isSorted) {
          if (a.title < b.title) {
            return -1;
          }
        }
      })
    },
    isLoaded(state) {

      return state.isLoaded;
    },
    isSorted(state) {
      return state.isSorted;
    }
  }
})