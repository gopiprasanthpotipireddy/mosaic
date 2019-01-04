var intro=introJs()
		intro.setOptions({
            steps: [
              
              {
                element: document.querySelector('#ab'),
                intro: "View Articles"
              },
              {
                element: document.querySelectorAll('#arb')[0],
                intro: "View Arts",
                position: 'bottom'
              },
              {
                element: '#tb',
                intro: 'Content',
                position: 'bottom'
              },
              {
                element: '#bb',
                intro: "Content.",
                position: 'bottom'
              },
              {
                element: '#eb',
                intro: 'Content'
              },
			  {
                element: '#fb',
                intro: 'Content.'
              },
			  {
                element: '#sb',
                intro: 'Search the WebSite'
              },
              {
                element:'#trending',
                intro:"The Trending Articles and Posts"
              }
            ],
            skipLabel:"Skip Tour",
            doneLabel:"End Tour",
            nextLabel:"<<<<",
            prevLabel :">>>>",
            exitOnOverlayClick:false
          });
		intro.start()
