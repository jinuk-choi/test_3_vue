<template>
  <v-simple-table>
      <template v-slot:default>
        <thead>
          <v-btn  router :to="{name:'boardwrite'}">글쓰기</v-btn> 
          <tr>
            <th class="text-left">
              NO
            </th>
            <th style="width: 200px;" class="text-left">
              제목
            </th>
            <th style="width: 200px;" class="text-left">
              내용
            </th>
            <th class="text-left">
              작성자
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
            @click="boardDetail(item.aIdx)"
          >
            <td>{{ item.rownum }}</td>
            <td>
              <span v-if="item.aDepth > 1">
                <span v-for="n in item.aDepth-1" v-bind:key="n">ㄴ</span>
              </span> {{ item.aTitle }}
            </td>
            <td>{{ item.aContent }}</td>
            <td>{{ item.user.name }}</td>
            <td>{{ item.aCount }}</td>
            <td>{{ item.aDate }}</td>
          </tr>
        </tbody>
          <div class="text-xs-center">
            <v-pagination
              v-model="page"
              :length="pagination.lastPage"
              :total-visible="5"
              @input="next(page)"
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
        pagination: null,
        page: null,
        List: null
      }
  },
  created() {
    this.boardList()
  },
  computed: {

  },
  methods: {
    ...mapActions(['boardDetail']),

    next (page) {
      axios.get('http://localhost:9100/api/test/user/'+page )
        .then(Response => {
            console.log(Response.data)
            this.pagination = Response.data
            this.List = this.pagination.boardList
        })
        .catch(Error => {
            console.log('error')
            reject(Error)
        })
    },

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

