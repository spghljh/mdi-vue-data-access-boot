<template>
  <div class="container mt-4">
    <h2 class="mb-3">cpu 테이블(json)</h2>

    <table class="table table-striped table-bordered">
      <thead class="table-light">
        <tr>
          <th>id_cpu</th>
          <th>name_cpu</th>
          <th>release_cpu</th>
          <th>core_cpu</th>
          <th>thread_cpu</th>
          <th>maxghz_cpu</th>
          <th>minghz_cpu</th>
          <th>type_code_cpu</th>
          <th>manf_code_cpu</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading"><td colspan="9" class="text-center text-muted">데이터 로딩 중...</td></tr>
        <tr v-for="cpu in cpus" :key="cpu.idCpu">
          <td>{{ cpu.idCpu }}</td>
          <td>{{ cpu.nameCpu }}</td>
          <td>{{ cpu.releaseCpu }}</td>
          <td>{{ cpu.coreCpu }}</td>
          <td>{{ cpu.threadCpu }}</td>
          <td>{{ cpu.maxGhzCpu }}</td>
          <td>{{ cpu.minGhzCpu }}</td>
          <td>{{ cpu.typeCodeCpu }}</td>
          <td>{{ cpu.manfCodeCpu }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PstmtCsrCpuTotal",
  data() {
    return { loading: true, cpus: [] };
  },
  mounted() {
    fetch("https://localhost:8081/api/cpus")
      .then(res => res.json())
      .then(data => { this.cpus = data; this.loading = false; })
      .catch(err => { console.error("Error loading CPUs:", err); this.loading = false; });
  }
};
</script>
