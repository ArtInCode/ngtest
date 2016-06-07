NgTest.factory('Manager', function(){

		var setting = {}; 

		setting.getSettings = function(){
			return setting="ok"; 
		}

		setting.getMenu = function(lang){
			var menuItems = {
					'en':[
							{
					                'order':1,
					                'active': true,
					                'link': '',
					                'text': 'Home'
						            },
						            {
						            	'order':2,
						                'active': false,
						                'link': '/about-us',
						                'text': 'About Us'
						            },
						            
						], 
					'ru':[
							{
					                'order':1,
					                'active': true,
					                'link': ' ',
					                'text': 'Главная'
						            },
						            {
						            	'order':2,
						                'active': false,
						                'link': '/about-us',
						                'text': 'О нас'
						            },
						            
						], 
				};
			return menuItems;
		}

		setting.getFlags = function(){
			var flagItems = [
				{
           			active: true,
	                link: '/en',
	                text: 'En',
	                id:'en'
           		},
           		{
           			active: false,
	                link: '/ru',
	                text: 'Ру',
	                id:'ru'
           		}
           	];
           	return flagItems;
		}

		setting.getPageTexts = function(lang){
			var texts = {
				en:{
					main:{
						appTitel:'Angular Test',
						projectName:'ArtInCode'
					},
					home:{
						pagetitle:'Welcome to us', 
						pagetext:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo quam quis sem dignissim cursus. Ut condimentum eros ligula, eu tincidunt velit porttitor quis. Sed tincidunt, velit eget scelerisque varius, lacus lorem ultricies ligula, sit amet luctus mi lorem ut magna. Duis sed quam mi. Suspendisse convallis ligula justo. Proin egestas diam id laoreet fringilla. Suspendisse lacinia lacus vel augue egestas sodales. Suspendisse finibus ipsum elit. Fusce facilisis tempor odio, sit amet venenatis ipsum laoreet sed. Donec sed nunc vel lacus pellentesque gravida. Suspendisse tristique egestas vestibulum.'
					}, 
					about:{
						pagetitle:'About US', 
						pagetext:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo quam quis sem dignissim cursus. Ut condimentum eros ligula, eu tincidunt velit porttitor quis. Sed tincidunt, velit eget scelerisque varius, lacus lorem ultricies ligula, sit amet luctus mi lorem ut magna. Duis sed quam mi. Suspendisse convallis ligula justo. Proin egestas diam id laoreet fringilla. Suspendisse lacinia lacus vel augue egestas sodales. Suspendisse finibus ipsum elit. Fusce facilisis tempor odio, sit amet venenatis ipsum laoreet sed. Donec sed nunc vel lacus pellentesque gravida. Suspendisse tristique egestas vestibulum.'
				
					}, 
					error_msg:{
						required:'Please fill the field',
						not_email:'This is not valid Email Address',
						short_string:'At least 6 letts max 20',
						wrong_email:'Wrong Email',
						wrong_pass:'Wrong Password'
						
					}, 
					labels:{
						login_buton:'Login',
						email_label:'Email',
						pass_label:'Password'
					}
				}, 
				ru:{
					main:{
						appTitel:'Angular тест',
						projectName:'ArtInCode'
					},
					home:{
						pagetitle:'Добро пожаловать к нам', 
						pagetext:'это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
					},
					about:{
						pagetitle:'О нас', 
						pagetext:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo quam quis sem dignissim cursus. Ut condimentum eros ligula, eu tincidunt velit porttitor quis. Sed tincidunt, velit eget scelerisque varius, lacus lorem ultricies ligula, sit amet luctus mi lorem ut magna. Duis sed quam mi. Suspendisse convallis ligula justo. Proin egestas diam id laoreet fringilla. Suspendisse lacinia lacus vel augue egestas sodales. Suspendisse finibus ipsum elit. Fusce facilisis tempor odio, sit amet venenatis ipsum laoreet sed. Donec sed nunc vel lacus pellentesque gravida. Suspendisse tristique egestas vestibulum.'
				
					},
					error_msg:{
						required:'Пожалуйста, заполните поля',
						not_email:'Это не относится Адрес электронной почты',
						short_string:'По крайней мере, 6 букв макс 20',
						wrong_email:'Неправильный адрес электронной почты',
						wrong_pass:'Неправильный пароль'
						
					}, 
					labels:{
						login_buton:'Войти', 
						email_label:'Емайл',
						pass_label:'пароль',
					}		
				}, 
			}; 

			return texts[lang];

		}

		return setting;
	}); 