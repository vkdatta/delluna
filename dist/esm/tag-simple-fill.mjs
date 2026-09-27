export const name="tag-simple-fill";
export const id="dl_d87782f85a35f2011a41";
export const url=new URL("../icons/tag-simple-fill.svg?v=94279f552cb28e5d8dca2ce5dedb84807d27dad72d6eef27f7241f2a9589c9e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
