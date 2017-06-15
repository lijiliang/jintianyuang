$(document).ready(function(){
				
				   document.onkeydown=function(event){
					var e = event || window.event || arguments.callee.caller.arguments[0];
							 
					 if(e && e.keyCode==13){ // enter 键
						var username = $("#username").val();
						var username2 = $("#username_head").val();
						if(username != "" && username != "请输入账号" )
						{
							checkUname1(); //要做的事情
						}
						else if(username != "" && username != "请输入账号" )
						{
							checkUname2(); //要做的事情
						}
					}
				}; 
		
				$("#loginbtn").click(function(){
					checkUname1(); //要做的事情
				});
				
				
				
				$("#loginbtn_head").click(function(){
					checkUname2();
				});
				
				
				function checkUname1() //要做的事情
				{
				var username = $("#username").val();
					var pw = $("#pw").val();
					
					// alert($("#remember").is(":checked"));
					var rem = 0;
					if($("#remember").is(":checked"))
						rem = 1;
					 
					// alert(rem);
					// return false;
					
					
					if(username == "" || username == "请输入账号" )
					{
						alert("请输入账号，再提交！");
						return false;
					}
					if(pw == "" || pw == "请输入密码" )
					{
						alert("请输入密码，再提交！");
						return false;
					}
					
					$.post("login/login_check", {"username":username,"pw":hex_md5(pw),"remember":rem},function(r){
						
						//console.log(r);
						if(r.k == "1")
						{							
							//执行同步代码
							var cd = r.tong_code;
							//alert(r.tong_code);	
							//eval("'"+cd+"'");
							var $div_1 = $("<div id = 'tongbu' style='display:none;'></div>");
							
							 var $parent = $("body");        // 获取<ul>节点。<li>的父节点
							 $parent.append($div_1);							 
							$("#tongbu").html(cd);
							//document.write(cd)							
							// alert(r.info);//这个不要的话同步会出问题，有待后续进一步考虑全局解决													 
							location.reload();
						}
						else
						{			
							alert(r.info);
						}
						
					},"json");
					
					}
				
				
				function checkUname2() //要做的事情
				{
					var username = $("#username_head").val();
					var pw = $("#pw_head").val();			
					
					if(username == "" || username == "请输入账号" )
					{
						alert("请输入账号，再提交！");
						return false;
					}
					if(pw == "" || pw == "请输入密码" )
					{
						alert("请输入密码，再提交！");
						return false;
					}
					
					$.post("login/login_check", {"username":username,"pw":hex_md5(pw)},function(r){
						
						//console.log(r);
						if(r.k == "1")
						{							
							//执行同步代码
							var cd = r.tong_code;
							//alert(r.tong_code);	
							//eval("'"+cd+"'");
							var $div_1 = $("<div id = 'tongbu' style='display:none;'></div>");
							
							 var $parent = $("body");        // 获取<ul>节点。<li>的父节点
							 $parent.append($div_1);							 
							$("#tongbu").html(cd);
							//document.write(cd)							
							// alert(r.info);													 
							location.reload();
						}
						else
						{			
							alert(r.info);
						}
						
					},"json");
					
				}
				
				
				
			});