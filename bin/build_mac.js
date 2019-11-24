const builder = require('electron-builder');

builder.build({
    config: {
        'appId': "speech_to_subtitle_translator",
        'mac':{
            'target': 'dmg',
        }
    }
})
