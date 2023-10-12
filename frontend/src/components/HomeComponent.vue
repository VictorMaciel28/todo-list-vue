<template>
  <div class="container">
    <h1>Lista de tarefas</h1>
    <h3 class="title">Em progresso</h3>
    <ul>
      <li v-for="item in 3" :key="item" class="list-item">
        {{ item * 12309329 * item * item * 123880912389123 }}
        <div class="edit-buttons">
          <el-button type="success">Concluir</el-button>
          <el-button type="warning">Editar</el-button>
          <el-button type="danger">Excluir</el-button>
        </div>
      </li>
    </ul>
    <h3 class="title">Concluídas</h3>
    <ul>
      <li v-for="item in 3" :key="item" class="list-item">
        {{ item * 12309329 * item * item * 123880912389123 }}
        <div class="edit-buttons">
          <el-button type="success">Retornar</el-button>
          <el-button type="warning">Editar</el-button>
          <el-button type="danger">Excluir</el-button>
        </div>
      </li>
    </ul>
    <el-button type="success">Adicionar tarefa</el-button>

    <h3 class="title">Nova Tarefa</h3>
    <ul>
      <el-form :model="form" label-width="120px">
        <el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item>
      </el-form>
    </ul>

  </div>
</template>
<script>


export default {
  data() {
    return {
      form: {}
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.container {
  width: 800px;
  margin: auto;

}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1%;
}

.edit-buttons {
  display: flex;
  align-items: center;
}

.title {
  text-align: left;
}
</style>
