import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuestionData } from 'src/app/question-data';
import { QuizData } from 'src/app/quiz-data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quiz-parent',
  templateUrl: './quiz-parent.component.html',
  styleUrls: ['./quiz-parent.component.scss']
})
export class QuizParentComponent implements OnInit {
  url=environment.quizUrl;
  quizs=['quiz'];
  quizQuestionList:QuestionData[]=[];
  randomQuestion:QuizData[]=[];
  quizCategory:string="quiz";
  qdata!: QuestionData;
  quizStartFlag=false;
  currentIndex=0;

  option1Bg ="none";
  option2Bg ="none";
  option3Bg ="none";
  option4Bg ="none";

  finalAns ="none";

  answerSelectedFlag = false;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.startQuiz();
  }
  startQuiz(){
    console.log(this.url);
    const url1=`${this.url}`;
    console.log(url1);
    this.http.get<QuizData>(url1).subscribe(data=>{
      //this.randomQuestion=data['questions']['quiz']
      console.log(data.questions.quiz);
     const shuffle= this.sortQuestion(data.questions.quiz);

     shuffle.forEach(q=>{this.quizQuestionList.push(q)});
      for(var i=0;i<this.quizQuestionList.length;i++)
      {
        console.log(this.quizQuestionList[i].question )
        this.qdata=this.quizQuestionList[i].question ;
      }

    });
  }
  sortQuestion(list: any[]){
    return list.sort(()=> Math.random( )- 0.5);
    
  }
  displayNextQuestion(i:any){
    this.qdata=this.quizQuestionList[i];
    this.quizStartFlag=true;
}
nextQuestion(){
  this.displayNextQuestion(this.currentIndex);
  this.currentIndex++;


}
playQuiz(){
  this.nextQuestion();
}

submitAnsOption1(answer : any)
{
  //alert(answer);
  this.answerSelectedFlag = true;
  this.qdata.userOption = answer;
  this.option1Bg = "gold";
  
 
 this. option2Bg ="white";
 this. option3Bg ="white";
 this. option4Bg ="white";


  this.finalAns = "option1Bg";
}
  submitAnsOption2(answer : any)
{
  //alert(answer);
  this.answerSelectedFlag = true;
  this.qdata.userOption = answer;
  this.option2Bg = "gold";
  this.option1Bg ="white";
 
  this. option3Bg ="white";
  this. option4Bg ="white";
  this.finalAns = "option2Bg";
}

submitAnsOption3(answer : any)
{
  //alert(answer);
  this.answerSelectedFlag = true;
  this.qdata.userOption = answer;
  this.option3Bg = "gold";
  this.option1Bg ="white";
  this. option2Bg ="white";
 
  this. option4Bg ="white";
  this.finalAns = "option3Bg";
}

submitAnsOption4(answer : any)
{
  //alert(answer);
  this.answerSelectedFlag = true;
  this.qdata.userOption = answer;
  this.option4Bg = "gold";
  this.option1Bg ="white";
  this. option2Bg ="white";
  this. option3Bg ="white";
   
  this.finalAns = "option4Bg";
}


validateAns()
{
    if(this.qdata.userOption == this.qdata.correctOption)
    {
      if(this.finalAns == 'option1Bg')
      { 
        this.option1Bg = "green";

      }
      if(this.finalAns == 'option2Bg')
      { 
        this.option2Bg = "green";

      }
      if(this.finalAns == 'option3Bg')
      { 
        this.option3Bg = "green";

      }
      if(this.finalAns == 'option4Bg')
      { 
        this.option4Bg = "green";

      }
      
    }
}

}
