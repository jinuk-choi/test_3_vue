import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld'; //메인 컴포넌트 호출
import List from '@/components/board/List'; //게시판 리스트 컴포넌트 호출
import Write from '@/components/board/Write'; //게시판 작성 컴포넌트 호출
import Login from '@/components/board/Login'; //로그인 컴포넌트 호출
import SignUp from '@/components/board/SignUp'; //로그인 컴포넌트 호출
import User from '@/views/User'; //로그인 컴포넌트 호출

Vue.use(Router); //vue 라우터 사용

export default new Router({ //라우터 연결
	routes:[
		{
			path:'/'
			,name:HelloWorld
			,component:HelloWorld
		}
		,{
			path:'/board/list'
			,name:List
			,component:List
		}
		
		,{
			path:'/board/write'
			,name:Write
			,component:Write
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
		
	]

	
})