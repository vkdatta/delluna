export const name="chat_bubble_off-fill";
export const id="dl_116d4b97dfa6a6a3d9fb";
export const url=new URL("../icons/chat_bubble_off-fill.svg?v=df234a4d2f1f1517de52b3be0d3e5325ac4bc77ee33fc39bab82f124a2c47c42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
