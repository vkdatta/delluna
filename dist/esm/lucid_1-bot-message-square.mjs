export const name="lucid_1-bot-message-square";
export const id="dl_427de9f91a174671b976";
export const url=new URL("../icons/lucid_1-bot-message-square.svg?v=fdedfd6e100780162444b1cd9916cce93246729e0d50f82af26621307cddf374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
