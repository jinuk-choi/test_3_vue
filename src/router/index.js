import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld'; //메인 컴포넌트 호출
import BoardList from '@/components/board/BoardList'; //게시판 리스트 컴포넌트 호출
import boardWrite from '@/components/board/Write'; //게시판 작성 컴포넌트 호출
import Login from '@/components/board/Login'; //로그인 컴포넌트 호출
import SignUp from '@/components/board/SignUp'; 
import User from '@/views/User'; 
import admin from '@/components/board/admin';
import boardDetail from '@/components/board/BoardDetail'

Vue.use(Router); //vue 라우터 사용

export default new Router({ //라우터 연결
	routes:[
		{
			path:'/'
			,name:HelloWorld
			,component:HelloWorld
		}
		,{
			path:'/board/boardlist'
			,name:'BoardList'
			,component:BoardList
		}
		
		,{
			path:'/board/write'
			,name:'boardwrite'
			,component:boardWrite
		}

		,{
			path:'/board/login'
			,name:'Login'
			,component:Login
		}

		,{
			path:'/board/signUp'
			,name:'SignUp'
			,component:SignUp
		}

		,{
			path:'/user'
			,name:User
			,component:User
		}

		,{
			path:'/board/admin'
			,name:'admin'
			,component:admin
		}

		,{
			path: '/board/boardDetail/:aIdx'
			,name: 'boardDetail'
			,component: boardDetail
		  }
		
	]

	
})