<template>
  <div class="container mt-4">
    <h2 style="margin-top:20px">RouteInfoController(Pstmt)</h2>

  <!-- 기타 라우트 -->
  <table class="table table-bordered table-sm table-hover">
    <thead class="table-light">
      <tr><th>HTTP Method</th><th>URI</th></tr>
    </thead>
    <tbody>
      <tr v-for="r in otherRoutes" :key="r.uri + r.method">
        <td>{{ r.method }}</td>
        <td>
          <a :href="`https://localhost:8081${r.uri}`">
              /pstmt{{ r.uri }}
          </a>
        </td>
      </tr>
    </tbody>
  </table>

    <!-- API 라우트 -->
    <table class="table table-bordered table-sm table-hover">
      <thead class="table-light">
        <tr><th>HTTP Method</th><th>URI</th></tr>
      </thead>
      <tbody>
        <tr v-for="r in apiRoutes" :key="r.uri + r.method">
          <td>{{ r.method }}</td>
          <td>
            <!-- API는 외부 호출이므로 router-link 대신 a 태그 -->
            <a :href="`https://localhost:8081${r.uri}`">
              /pstmt{{ r.uri }}
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- CSR 라우트 -->
    <table class="table table-bordered table-sm table-hover">
      <thead class="table-light">
        <tr><th>HTTP Method</th><th>URI</th></tr>
      </thead>
      <tbody>
        <tr v-for="r in csrRoutes" :key="r.uri + r.method">
          <td>{{ r.method }}</td>
          <td>
            <router-link :to="`/pstmt${r.uri}`">
              /pstmt{{ r.uri }}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: "PstmtIndex",
  data() {
    return {
      loading: true,
      otherRoutes: [],
      apiRoutes: [],
      csrRoutes: [],
      ssrRoutes: []
    };
  },
  mounted() {
    fetch("https://localhost:8081/routes")
      .then(res => res.json())
      .then(data => {
        const routes = data.map(item => {
          const uri = item.substring(0, item.indexOf(" ["));
          const method = item.substring(item.indexOf("[") + 1, item.indexOf("]"));
          return { uri, method };
        });

        routes.sort((a, b) => a.uri.localeCompare(b.uri));

        this.otherRoutes = routes.filter(r => !r.uri.startsWith("/api") && !r.uri.startsWith("/csr") && !r.uri.startsWith("/ssr"));
        this.apiRoutes   = routes.filter(r => r.uri.startsWith("/api"));
        this.csrRoutes   = routes.filter(r => r.uri.startsWith("/csr"));
        this.ssrRoutes   = routes.filter(r => r.uri.startsWith("/ssr"));

        this.loading = false;
      })
      .catch(err => {
        console.error("Error loading routes:", err);
        this.loading = false;
      });
  }
};
</script>

<style scoped>
th.method-col, td.method-col { width: 10%; }
th.uri-col, td.uri-col { width: 80%; }
</style>
