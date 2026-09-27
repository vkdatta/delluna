export const name="lucid_1-chevrons-right";
export const id="dl_54b3e7b6a63e467e9b28";
export const url=new URL("../icons/lucid_1-chevrons-right.svg?v=20243075372253beb1b58678833329ee11968f26f8da433372a5588505d499a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
