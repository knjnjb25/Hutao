const _0x194112 = _0x378c;
(function (_0x5a3cf0, _0x18708b) {
    const _0x406b57 = _0x378c;
    const _0x1e92e6 = _0x5a3cf0();
    while (!![]) {
        try {
            const _0x4fe02a = -parseInt(_0x406b57(0x1e)) / 0x1 * (-parseInt(_0x406b57(0x14)) / 0x2) + -parseInt(_0x406b57(0x21)) / 0x3 * (parseInt(_0x406b57(0x1d)) / 0x4) + -parseInt(_0x406b57(0x25)) / 0x5 * (parseInt(_0x406b57(0x12)) / 0x6) + parseInt(_0x406b57(0x18)) / 0x7 + parseInt(_0x406b57(0xc)) / 0x8 * (parseInt(_0x406b57(0xf)) / 0x9) + -parseInt(_0x406b57(0x2e)) / 0xa * (parseInt(_0x406b57(0x31)) / 0xb) + parseInt(_0x406b57(0x19)) / 0xc;
            if (_0x4fe02a === _0x18708b) {
                break;
            } else {
                _0x1e92e6['push'](_0x1e92e6['shift']());
            }
        } catch (_0x423c97) {
            _0x1e92e6['push'](_0x1e92e6['shift']());
        }
    }
}(_0x30d8, 0x6ccad));

function _0x30d8() {
    const _0x17abed = ['\x0a[ إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا. ]\x0a\x0a⦓      ⦓ *🌿بروفايلك🌿* ⦔      ⦔\x0a🔖⏐ *الاسم: ', '869ihkitH', 'data', 'digest', '*\x0a⭐⏐ *مميز : ', 'split', 'quoted', 'mentionedJid', 'key', 'Yes', '*\x0a🧧⏐ *مستواك:* *', 'tags', 'md5', '* \x0a*🪙⏐ عملات: ', 'users', 'group', '6370352ZefTzT', 'بروفايلي', 'help', '9ZdvNmv', 'بروفايل', 'update', '4259478FNLTsz', 'profile', '422544nRZkRb', '*\x0a📇⏐ *مسجل : ', 'prems', 'image', '515830Wptteu', '6723744vecxPv', 'chat', 'fromMe', '*\x0a⦓      ⦓ *🌿 HU TAO 🌿* ⦔      ⦔', '11132rSzojS', '4BnmEMA', 'limit', '* \x0a📎⏐ *الرابط: https://wa.me/', '519ghtOnY', 'perfil', 'level', 'sendFile', '5HezZDS', 'sendMessage', 'catch', '*\x0a🏆⏐ *الدور:* *', '*\x0a💦⏐ *المطور:', 'رانك', 'sender', './src/avatar_contact.png', 'multiplier', '80810nhACjR', 'profilePictureUrl'];
    _0x30d8 = function () {
        return _0x17abed;
    };
    return _0x30d8();
}
import {
    createHash
} from 'crypto';
import _0x2e3b82 from 'awesome-phonenumber';
import {
    canLevelUp,
    xpRange
} from '../lib/levelling.js';
let handler = async (_0x7a2aff, {
    conn: _0x770443,
    usedPrefix: _0x234154,
    command: _0x52cf80
}) => {
    const _0x3e29dd = _0x378c;
    let _0x1e8aa2 = _0x7a2aff[_0x3e29dd(0x2)] ? _0x7a2aff[_0x3e29dd(0x2)]['sender'] : _0x7a2aff[_0x3e29dd(0x3)] && _0x7a2aff[_0x3e29dd(0x3)][0x0] ? _0x7a2aff['mentionedJid'][0x0] : _0x7a2aff[_0x3e29dd(0x1b)] ? _0x770443['user']['jid'] : _0x7a2aff[_0x3e29dd(0x2b)];
    if (!(_0x1e8aa2 in global['db'][_0x3e29dd(0x32)][_0x3e29dd(0xa)])) throw '✳️ The user is not found in my database';
    let _0x3a1ab3 = await _0x770443[_0x3e29dd(0x2f)](_0x1e8aa2, _0x3e29dd(0x17))[_0x3e29dd(0x27)](_0x4e74fb => _0x3e29dd(0x2c));
    let _0x4c20cb = global['db'][_0x3e29dd(0x32)]['users'][_0x1e8aa2];
    let {
        name: _0x352c39,
        exp: _0x2c32d5,
        diamond: _0x225b26,
        lastclaim: _0x168c18,
        registered: _0x115f6e,
        regTime: _0x405c85,
        age: _0x40e612,
        level: _0x4ea160,
        role: _0x473612,
        warn: _0x4a5e05,
        coin: _0x2ab336,
        crystal: _0x724b38
    } = global['db'][_0x3e29dd(0x32)][_0x3e29dd(0xa)][_0x1e8aa2];
    let {
        min: _0x540be9,
        xp: _0x468e4b,
        max: _0x3ec31c
    } = xpRange(_0x4c20cb[_0x3e29dd(0x23)], global[_0x3e29dd(0x2d)]);
    let _0x2765a5 = _0x770443['getName'](_0x1e8aa2);
    let _0x4fa500 = _0x3ec31c - _0x468e4b;
    let _0x5eab58 = global[_0x3e29dd(0x16)]['includes'](_0x1e8aa2[_0x3e29dd(0x1)]
        `@` [0x0]);
    let _0x36164b = createHash(_0x3e29dd(0x8))[_0x3e29dd(0x11)](_0x1e8aa2)[_0x3e29dd(0x33)]('hex');
    await _0x770443[_0x3e29dd(0x26)](_0x7a2aff['chat'], {
        'react': {
            'text': '🔖',
            'key': _0x7a2aff[_0x3e29dd(0x4)]
        }
    });
    let _0x4a56ea = _0x3e29dd(0x30) + _0x352c39 + _0x3e29dd(0x20) + _0x1e8aa2['split']
    `@` [0x0] + _0x3e29dd(0x6) + _0x4ea160 + _0x3e29dd(0x9) + global['db'][_0x3e29dd(0x32)][_0x3e29dd(0xa)][_0x1e8aa2][_0x3e29dd(0x1f)] + _0x3e29dd(0x28) + _0x473612 + _0x3e29dd(0x29) + veeee + _0x3e29dd(0x15) + (_0x115f6e ? _0x3e29dd(0x5) : 'No') + _0x3e29dd(0x0) + (_0x5eab58 ? _0x3e29dd(0x5) : 'No') + _0x3e29dd(0x1c);
    _0x770443[_0x3e29dd(0x24)](_0x7a2aff[_0x3e29dd(0x1a)], _0x3a1ab3, 'perfil.jpg', _0x4a56ea, _0x7a2aff, ![], {
        'mentions': [_0x1e8aa2]
    });
};

function _0x378c(_0xdb541c, _0x30d8b1) {
    const _0x378cd0 = _0x30d8();
    _0x378c = function (_0x3da039, _0x22ce8b) {
        _0x3da039 = _0x3da039 - 0x0;
        let _0x262aef = _0x378cd0[_0x3da039];
        return _0x262aef;
    };
    return _0x378c(_0xdb541c, _0x30d8b1);
}
handler[_0x194112(0xe)] = [_0x194112(0x22)];
handler[_0x194112(0x7)] = [_0x194112(0xb)];
handler['command'] = [_0x194112(0x13), _0x194112(0x10), _0x194112(0xd), _0x194112(0x2a)];
export default handler;