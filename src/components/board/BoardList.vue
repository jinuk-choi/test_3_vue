<template>
  <v-simple-table>
      <template v-slot:default>
        <thead>
          <v-btn  router :to="{name:'boardwrite'}">글쓰기</v-btn> 
          <tr>
            <th class="text-left">
              NO
            </th>
            <th class="text-left">
              작성자
            </th>
            <th class="text-left">
              제목
            </th>
            <th class="text-left">
              내용
            </th>
            <th class="text-left">
              조회수
            </th>
            <th class="text-left">
              작성일
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in List"
            :key="item.aIdx"
          >
            <td>{{ item.rownum }}</td>
            <td>{{ item.user.name }}</td>
            <td>{{ item.aTitle }}</td>
            <td>{{ item.aContent }}</td>
            <td>{{ item.aCount }}</td>
            <td>{{ item.aDate }}</td>
          </tr>
        </tbody>
          <div class="text-xs-center">
            <v-pagination
              v-model="page"
              :length="5"
            ></v-pagination>
          </div>
      </template>
  </v-simple-table>
</template>
<script>
import { mapActions,mapState } from "vuex"
import axios from 'axios'
export default {
  
  data () {
      return {
        page: 1,
        pagination: null,
        List: null
      }
  },
  created() {
    this.boardList()
  },
  computed: {

  },
  methods: {
    ...mapActions(['boardDetail','boardWrite']),

    boardList() {
      return new Promise((resolve, reject) => {
          axios.get('http://localhost:9100/api/test/user')
              .then(Response => {
                  console.log(Response.data)
                  this.pagination = Response.data
                  this.List = this.pagination.boardList
              })
              .catch(Error => {
                  console.log('error')
                  reject(Error)
              })
      })
    }
  }
}
</script>
