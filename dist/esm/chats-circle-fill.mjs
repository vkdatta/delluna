export const name="chats-circle-fill";
export const id="dl_de647d4fa4ad4dcbb8aa";
export const url=new URL("../icons/chats-circle-fill.svg?v=4571e1f82067644fabd6b8d70aec1850aef654fc4f166b2c5b75ebc34b967c7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
