/*
    Name:Ajima Master
    Student Number:0771451
*/

// Class code goes here
var _secret='test.json';
const guessNumber=0;

//custom class
class AjimaMasterSecret{
  //intialize the value   
constructor(mySecret){
    this.fileName=_secret;
    this.guessNumber=[5];
    this.hint=['letter','vowel','length','',''];
    this.mySecret=mySecret;

    
}
//get the  hint of gussing name
 getHint(){
    var secret={
        fileName:'filename',

    }

    //lose the game
    if (guessNumber>=5){
        return hint.length=0;
    }
    if(isEmpty(secret)===0){
        hint.append(this.getHint);
    }
return hint[guessNumber];
}
//set counter
setHint(){
    this.hint[guessNumber]=hint[guessNumber]+1;
}

//
secret=function testSecret(fileName){
    this.fileName=fileName;
    this.guessNumber++;
    //lose game if guess exceed more than 5
    if(guessNumber>=5){
        console.log('they have lost game ',`${hint[5]}`);
    }
    if(guessNumber<=5){
                
    
    //open json file for guess less than 5
        try{
            function getFile(fileName){
                $.ajax(
                    {url:'chessCandidateW0771451.json',
                data:{fileName:fileName},
                success:function(data){
                    var file=document.open('','title');
                    file.document.write(data);
                }
            }
                    
                    );

            }
            $('#guess-button').click(function(){
                getFile('somefile.json');
            });
            
        }
        catch{
error.getFile(fileName);
        }
    }
    return file;

}
}


// jquery code goes here
$('#document').ready(function(){
    //initialize mysecret variable
    var mySecret=$('#filename').val();
    alert(mySecret);
    //update counter and 
    $('div#counter').append(mySecret);
    $('#guess-button').on('click',function(){
        mySecret.secret=$('input#filename');
        getFile('chessCandidateW0771451.json');
        $('div#result').text('<p>they have lost</p>');
    $('div#result').text('<p>congratulation you win</p>');
        //append hint to get hint
        $('div#hints').append('hint');
    })
    //display result
    //$('div#result').text('<p>they have lost</p>');
    //$('div#result').text('<p>congratulation you win</p>');

});