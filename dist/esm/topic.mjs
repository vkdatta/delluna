export const name="topic";
export const id="dl_e54671c447cea937d2c8";
export const url=new URL("../icons/topic.svg?v=0a69b92bfe7286d3af036d232bde4fa130df7d335cd2d6d9b32a5d1c6922023f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
