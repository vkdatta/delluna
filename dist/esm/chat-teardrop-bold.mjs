export const name="chat-teardrop-bold";
export const id="dl_47229015c28c4b0592c2";
export const url=new URL("../icons/chat-teardrop-bold.svg?v=482e117086ced9e20bf58dac4e463300da41364e14ca1f50d4f663f29ce8060d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
