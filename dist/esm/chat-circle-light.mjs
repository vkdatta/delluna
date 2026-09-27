export const name="chat-circle-light";
export const id="dl_20989725c3d6432a8ce3";
export const url=new URL("../icons/chat-circle-light.svg?v=fffb9ac3caccc8fc64f08ac25814ae188ea516ec03e8a8d90654678a76b09d3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
