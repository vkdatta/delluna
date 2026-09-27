export const name="chat-teardrop-dots-light";
export const id="dl_3a2ee6648f7e49eaac82";
export const url=new URL("../icons/chat-teardrop-dots-light.svg?v=7e4253828fca9995b6937a93e0c839155a1b6d38abadb39ee0fef0ae3e17579f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
