		
function onSelectionCallback(event,fileList)
{
			var f = fileList[0];
			var ele = document.getElementById("customImageId");
			ele.src = URL.createObjectURL(f);
			ele.style.display='block';
			ele.style.width='360px';
			ele.style.height='200px';
			var base64 = getBase64Image(ele);
			kony.print(base64)
			alert(base64);
			
			//var reader = new FileReader();
//    	    reader.onload = (function(theFile) {
//		    return function(e) {
//		    var raw = e.target.result;
//			raw = raw.replace("data:image/png;base64,","");
//			kony.print("raw:"+raw);
//            };
//		      })(f);
//		
//		      // Read in the image file as a data URL.
//		      reader.readAsDataURL(f);
      		
		}
		
function fileBrowse(browseConfig)
{
       
			function handlerFileBrowse(event)
			{	
						
					var fileList = [];
					for (var i = 0, f; f = event.target.files[i]; ++i) {
						fileList.push(f); 
					}        
					
					onSelectionCallback(event, fileList); // call browse API callback, pass original file event & file list}  
			}
		    var fileElement = document.getElementById("konyFileElem");
            if(!fileElement){
                htmlString = "<input type='file' multiple id='konyFileElem'  style='opacity:0;width:0px;height:0px;' />";
                var wrapper = document.createElement('div');
                wrapper.innerHTML = htmlString;
                document.body.appendChild(wrapper);
                fileElement = document.getElementById("konyFileElem");
				
				fileElement.addEventListener('change',handlerFileBrowse,false);
            }
            
            if(browseConfig.selectMultipleFiles == false) 
                fileElement.removeAttribute("multiple"); 
            else 
                fileElement.setAttribute("multiple","multiple");
            if(browseConfig.filter) 
                fileElement.setAttribute("accept", browseConfig.filter.join(",")); 
            else 
                fileElement.removeAttribute("accept");
            
            fileElement.click();
}

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

