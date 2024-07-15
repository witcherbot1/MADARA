import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return;
if (!text) throw `*${lenguajeGB['smsAvisoMG']()}*منور ياقلب مادارا اكتب اي سؤال عشان ارد عليك👾\n\n*❏ مثال*\n❏ ${usedPrefix + command} \n❏ ${usedPrefix + command} مادارا من هو مخترع الهواتف؟.`    

if (command == 'مادارا' || command == 'بوت') {
try {
conn.sendPresenceUpdate('composing', m.chat);
let gpt = await fetch(`https://zoro-api-zoro-bot-5b28aebf.koyeb.app/api/gpt4?text=${text}`)
let res = await gpt.json()
await m.reply(res.gpt)
} catch {
try {
let gpt = await fetch(`https://zoro-api-zoro-bot-5b28aebf.koyeb.app/api/gpt4?text=${text}`)
let res = await gpt.json()
await m.reply(res.data)
} catch {
}}}

if (command == 'بوت' || command == 'مادارا' || command == 'gpt') {
conn.sendPresenceUpdate('composing', m.chat);
let gpt = await fetch(`https://zoro-api-zoro-bot-5b28aebf.koyeb.app/api/gpt4?text=${text}`) 
let res = await gpt.json()
await m.reply(res.gpt)
}}
handler.command = /^(بوت|chatgpt|ia|ai|openai2|gpt|مادارا)$/i;
export default handler;
