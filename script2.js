//create custom class
class AjimaMasterSecret{
    //intialize object
    constructor(_secret,filename,guessNumber){
        this._secret=_secret;
        this._secret=filename;
        //store json data into secret variable
        this._secret=jsonObject.toString();
        //recreate json object from string
         jsonObject=new JSONObject(_secret);
         //create instance of object
         var xhr=new XMLHttpRequest();
         xhr.open('GET','chessCandidatesw0771451',true);
         xhr.send('search=hessCandidatesw0771451');
         //server respond
         xhr.onload=function(){
            if(xhr.status==200){
                //json to javascript
                this._secret=xhr.responseText;
            }

         }
         //initially 0
         this.guessNumber[5]=0;
         //hints to guess filename
         this.hints[5]=['test.json','chessCandidatew0771451','scipt.json','index.json','name.json'];
         


    }
    get Hints(){
        //return empty string 
        if(guessNumber>=5){
            return '';

        }
        else return hints[5];
        
        
        
    }
    secret=function testSecret() {
        //get file name
        var fileInput = document.getElementById('#filename');   
_secret = fileInput.files[0].name;
guessNumber=guessNumber+1;
//display result
if(guessNumber>=5){
    document.getElementById('result').innerHTML='they have lost'

}

    try{
        if(guessNumber<5){
            //open filename if guess number is less 
            $.ajax(
                {type:'GET',
                url:'chessCandidatew0771451',
                data:'somefilename',
                success:function(){
                    alert('they have lost game');
                },
                //return error
                error:function(xhr){
                    alert('Error'+xhr.status)
                },
                dataType:'json'
                });

        }
        

    }catch(e){
alert('you messed up something up');
    }
    function makeXHRCallforJSON(){
         //if file open sucessfully then return content of file
    if(xhr.status==200){
        //return content as an object
        let el=document.getElementById('content');
        let responseDataJSON=xhr.responseText;
        console.log('json file',responseDataJSON);
        let responseDataObject = JSON.parse(responseDataJSON);
      console.log("This is the Object version: ", responseDataObject);
    }
   
    }
    
}
    }
    

$('document').ready(function(){
    $('#guess-button').on('click',function(){
        //CALL 
        makeXHRCallforJSON();
    })
    //display result and update 
    $('#result').append(filename);
    $('#result').text('<h2>they have lost the game</h2>')
})

//get set property
    
   //let String _secret=jsonObject.toString();