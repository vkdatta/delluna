export const name="chat-circle";
export const id="dl_14943cd1570143c69c64";
export const url=new URL("../icons/chat-circle.svg?v=09e36aa820a39bbc8cffe705ad84c836d1e5733f83dc1d2212a965fdacdf4a67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
