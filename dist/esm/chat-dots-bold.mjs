export const name="chat-dots-bold";
export const id="dl_47b8904197804dddba4a";
export const url=new URL("../icons/chat-dots-bold.svg?v=4a8c9b74920c9617ff09159177f5e9a3542f1259482e29dc9a51865d2553e26c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
