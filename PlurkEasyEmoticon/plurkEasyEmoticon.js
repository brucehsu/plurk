var plurkEasyEmoticon = {
    emoticons:[
        {imgUrl:'http://statics.plurk.com/7256dae81d56d150120ccd0c96dd2197.gif', codeText:'(fireworks)'},
        {imgUrl:'http://statics.plurk.com/47d20905d017c396d67b4a30c9ac9b10.png', codeText:'(goal)'},
        {imgUrl:'http://statics.plurk.com/4ad099fba019942f13058610ff3fc568.gif', codeText:'(dance_bzz)'},
        {imgUrl:'http://statics.plurk.com/5a2a63fa773e68797ec69a1303bfa3b9.png', codeText:'(bzzz)'},
        {imgUrl:'http://statics.plurk.com/deda4d9f78ad528d725e3a6bfbf6352f.gif', codeText:'(\u0420\u0443\u0441\u0441\u043A\u0438\u0439)'},
        {imgUrl:'http://statics.plurk.com/0efc4d55d28704f4370ef874ae906161.gif', codeText:'(code)'},
        {imgUrl:'http://statics.plurk.com/4c40d16a0d369b895c08f2e33d062ec8.gif', codeText:'(yarr)'},
        {imgUrl:'http://statics.plurk.com/fcd28d7d78ec1f828c76930fa63270e6.gif', codeText:'(gym_okok)'},
        {imgUrl:'http://statics.plurk.com/71acd802cc931649dd9a371ccf70bad2.gif', codeText:'(hungry_okok)'},
        {imgUrl:'http://statics.plurk.com/74030f05f06547a3d26b02ccbf0bbac7.gif', codeText:'(music_okok)'},
        {imgUrl:'http://statics.plurk.com/3acbaf42504fff32c5eac4f12083ce56.gif', codeText:'(yarr_okok)'},
        {imgUrl:'http://statics.plurk.com/bac8c8392f7ca8f5ac74612be4d08b74.gif', codeText:'(wave_okok)'},
        {imgUrl:'http://statics.plurk.com/a555399b40c379adca5b6f5bad5bf732.gif', codeText:'(dance_okok)'},
        {imgUrl:'http://statics.plurk.com/b3b9856e557fcc2700fd41c53f9d4910.gif', codeText:'(droid_dance)'},
        {imgUrl:'http://statics.plurk.com/1a5f23ed863e70e52f239b045a48e6fb.gif', codeText:'(xmas1)'},
        {imgUrl:'http://statics.plurk.com/f5dbd5fdf5f5df69cfb024d6be76a76b.gif', codeText:'(xmas2)'},
        {imgUrl:'http://statics.plurk.com/e902170e97aee14836b5df6b0fe61ba2.gif', codeText:'(xmas3)'},
        {imgUrl:'http://statics.plurk.com/e476574723d5042f24658fa36866bd92.gif', codeText:'(xmas4)'},
        {imgUrl:'http://statics.plurk.com/cfdd2accc1188f5fbc62e149074c7f29.png', codeText:'(fuu)'},
        {imgUrl:'http://statics.plurk.com/828b9819249db696701ae0987fba3638.png', codeText:'(gfuu)'},
        {imgUrl:'http://statics.plurk.com/1bd653e166492e40e214ef6ce4dd716f.png', codeText:'(yay)'},
        {imgUrl:'http://statics.plurk.com/3fe6cf919158597d7ec74f8d90f0cc9f.png', codeText:'(gyay)'},
        {imgUrl:'http://statics.plurk.com/9c5c54081547d2ad903648f178fcc595.png', codeText:'(bah)'},
        {imgUrl:'http://statics.plurk.com/2da76999ca3716fb4053f3332270e5c9.png', codeText:'(gbah)'},
        {imgUrl:'http://statics.plurk.com/f73b773aa689647cb09f57f67a83bb89.png', codeText:'(troll)'}
        ],

        easyDiv: document.getElementById('plurkEasyEmoticonDiv'),
        isBarVisible: false,
        barHeight: 50,
        lastInputFocused: null,

        init: function() {
            if (!this.easyDiv) {
                this.easyDiv = document.createElement('div');
                this.easyDiv.setAttribute('id', 'extraEmoticonBar');
                this.easyDiv.setAttribute('style', 'z-index:9999; width:100%; height:' + this.barHeight + 'px; position: fixed; top:0; background-color:#fff;')
                for (var i in this.emoticons) {
                    var eicon = this.emoticons[i];
                    var img = document.createElement('img');
                    img.setAttribute('alt', eicon.codeText);
                    img.setAttribute('src', eicon.imgUrl);
                    img.addEventListener('click', function(event) {
                        if (plurkEasyEmoticon.lastInputFocused) {
                            plurkEasyEmoticon.lastInputFocused.value += ' ' + event.target.getAttribute('alt');
                            plurkEasyEmoticon.lastInputFocused.focus();
                        } else {
                            alert('please after installing PlurkEasyEmoticon move input on plurk editbox');
                        }
                    }, true);
                    this.easyDiv.appendChild(img);
                }
                document.body.appendChild(this.easyDiv);
                this.isBarVisible = true;
                window.addEventListener('mousemove', function(event) {
                    var y = event.clientY;
                    
                    if (plurkEasyEmoticon.isBarVisible) {
                        if (y > plurkEasyEmoticon.barHeight) {
                            plurkEasyEmoticon.easyDiv.style.display = 'none';
                            plurkEasyEmoticon.isBarVisible = false;
                        }
                    } else {
                        if (y < plurkEasyEmoticon.barHeight) {
                            plurkEasyEmoticon.easyDiv.style.display = 'block';
                            plurkEasyEmoticon.isBarVisible = true;
                        }
                    }
                }, true);
                document.getElementById('input_big').addEventListener('focus', function(event) {
                    plurkEasyEmoticon.lastInputFocused = event.target;
                }, true);
                document.getElementById('input_small').addEventListener('focus', function(event) {
                    plurkEasyEmoticon.lastInputFocused = event.target;
                }, true);
            }
        }
};
plurkEasyEmoticon.init();