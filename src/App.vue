<template>
  <div class="todo">
    <div class="todo__main-block">
      <div class="todo__tittle tittle">Список дел</div>
      <div class="todo__creator">
        <input
            v-model="$store.state.taskText"
            @keydown.enter="add"
            type="text" placeholder="Введите новое дело...">
        <button @click="add" id="savebtn">Сохранить</button>
      </div>
    </div>

    <div class="todo__list">
      <ul
          v-for="task in $store.getters.filtered"
          :key="task">
        <li
            @click="task.isDone = !task.isDone"
            :class="{ notDone: !task.isDone, _done: task.isDone }"
            class="taskEl _notDone">{{task.item}}
          <img @click.stop="remove(task)" id="deleting" src="./img/del.png" alt="">
        </li>
      </ul>
    </div>

    <div class="todo__filter">
      <div class="todo__filter__item">
        <a
            @click="$store.state.filter = FILTER.DONE"
            :class="{bold: $store.state.filter === FILTER.DONE}"
            id="done" href="#">Сделано({{doneTasks}})</a>
      </div>
      <div class="todo__filter__item">
        <a
            @click="$store.state.filter = FILTER.NOTDONE"
            :class="{bold: $store.state.filter === FILTER.NOTDONE}"
            id="notDone" href="#">Не сделано({{notDoneTasks}})</a>
      </div>
      <div class="todo__filter__item">
        <a
            @click="$store.state.filter = FILTER.ALL"
            :class="{bold: $store.state.filter === FILTER.ALL}"
            id="all" href="#">Все({{doneTasks + notDoneTasks}})</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    add(){ this.$store.commit('addNewTask') },
    remove(task){ this.$store.commit('remove', task) },
  },

  computed: {
    FILTER: function (){ return this.$store.getters.FILTER },
    doneTasks: function (){ return this.$store.getters.doneTasks },
    notDoneTasks: function (){ return this.$store.getters.notDoneTasks }
  }
};
</script>

<style src="./style.css"></style>
