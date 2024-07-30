const axios = require('axios');
require('dotenv').config(); // dotenvのconfigメソッドを呼び出す

slack("おはよ");

// axios を使って情報を送信する
async function slack(message) {
    const url = process.env.SLACK_URL;
    const data = {
        text: message
    };

    try {
        await axios.post(url, { payload: JSON.stringify(data) }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        });
        console.log('送信成功');

    } catch (error) {
        console.log(`失敗 Error:${Error}`);
    }
}
