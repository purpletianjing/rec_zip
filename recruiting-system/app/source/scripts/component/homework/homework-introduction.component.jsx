'use strict';

var Reflux = require('reflux');
var HomeworkIntroductionStore = require('../../store/homework/homework-introduction-store');
var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

var HomeworkIntroduction = React.createClass({
  mixins: [Reflux.connect(HomeworkIntroductionStore)],

  getInitialState: function () {
    return {
      desc: '',
      showRepo: this.props.getShowStatus
    };
  },

  render() {
    var desc = this.state.desc;

    function content() {
      var pattern = /a href=/g;
      desc = marked(desc);
      var addTargetInMarkDownText = desc.replace(pattern, "a target='_blank' href=");
      return {__html: addTargetInMarkDownText};
    }

    return (
        <div className="tab">
          <div className="content">
            <div id="introduction" dangerouslySetInnerHTML={content()}>
            </div>
            <div className={'templateRepo ' + (this.state.showRepo ? '' : ' hide')}>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = HomeworkIntroduction;
