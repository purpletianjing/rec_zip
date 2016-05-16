'use strict';

require('../less/homework.less');
var Navigation = require('./component/navigation/navigation.component.jsx');
var Account = require('./component/reuse/get-account.component.jsx');
var HomeworkSidebar = require('./component/homework/homework-sidebar.component.jsx');
var HomeworkContent = require('./component/homework/homework-content.component.jsx');
var HomeworkIntroduction = require('./component/homework/homework-introduction.component.jsx');
var SubmissionIntroduction = require('./component/homework/submission-introduction.component.jsx');
var RunningResult = require('./component/homework/running-result.component.jsx');
var HomeworkAction = require('./actions/homework/homework-actions');
var constant = require('../../mixin/constant');
var request = require('superagent');
var errorHandler = require('../../tools/error-handler.jsx');
var homeworkQuizzesStatus = require('../../mixin/constant').homeworkQuizzesStatus;

function changeId() {
  var orderId;
  var getId = location.hash.substr(1);
  if (getId === '') {
    orderId = 1;
  } else {
    orderId = parseInt(getId);
  }
  return  orderId;
}

window.onpopstate = function () {
  var number = parseInt(location.hash.substr(1));
  HomeworkAction.changeOrderId(number);
};

function onAction(number) {
  HomeworkAction.changeOrderId(number);
  history.pushState(null, '', '#' + number);
}

var HALF_SECONDS_PER_MINUTE = 30;

HomeworkAction.changeOrderId(changeId());

function startProgress() {
  var progress, goOn;

  progress = setInterval(() => {
    request.get('/homework/get-list')
      .set('Content-Type', 'application/json')
      .use(errorHandler)
      .end((err, res) => {
        goOn = res.body.homeworkQuizzes.some((element) => {
          return element.status === homeworkQuizzesStatus.PROGRESS || element.status === homeworkQuizzesStatus.LINE_UP;
        });

        if(!goOn){
          clearInterval(progress);
        }
      });

    HomeworkAction.reload(changeId());
  }, constant.time.MILLISECOND_PER_SECONDS * HALF_SECONDS_PER_MINUTE);
}

startProgress();

ReactDom.render(
    <div>
      <header>
        <Navigation>
          <Account />
        </Navigation>
      </header>
        <div>
          <HomeworkSidebar onAction={onAction} orderId={changeId()}/>
          <HomeworkContent>
            <HomeworkIntroduction />
            <SubmissionIntroduction orderId={changeId()}
                                    startProgress={startProgress}/>
            <RunningResult orderId={changeId()}/>
          </HomeworkContent>
        </div>
    </div>,
    document.getElementById('homework')
);
