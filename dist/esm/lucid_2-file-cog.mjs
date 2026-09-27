export const name="lucid_2-file-cog";
export const id="dl_2ba0a588b3064d679bce";
export const url=new URL("../icons/lucid_2-file-cog.svg?v=f62ce4ef0ee640b8ff17db882bc5582d72ccca9c66a4b9062cc0ea917995d6e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
