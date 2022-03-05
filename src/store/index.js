import {createStore} from "vuex";

const FILTER = {
    ALL: "all",
    DONE: "done",
    NOTDONE: 'notDone',
};

export default createStore({
    state:{
        taskText: "",
        tasks: [],
        filter: FILTER.ALL,
    },

    getters:{
        FILTER(){
            return FILTER;
        },

        doneTasks(state){
            return state.tasks.filter((t) => t.isDone).length;
        },

        notDoneTasks(state){
            return state.tasks.filter((t) => !t.isDone).length;
        },

        filtered(state) {
            if (state.filter === FILTER.DONE)
                return state.tasks.filter(t => t.isDone);
            if (state.filter === FILTER.NOTDONE)
                return state.tasks.filter(t => !t.isDone);
            return state.tasks;
        }
    },

   mutations:{
       addNewTask(state) {
           const newTask = {
               item: state.taskText,
               isDone: false,
           };

           state.tasks.push(newTask);
           state.taskText = "";
       },

       remove(state, taskToRemove) {
           state.tasks = state.tasks.filter(t => t != taskToRemove);
       },
   }
});