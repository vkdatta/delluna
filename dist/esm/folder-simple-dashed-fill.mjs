export const name="folder-simple-dashed-fill";
export const id="dl_807f8d8488a449329246";
export const url=new URL("../icons/folder-simple-dashed-fill.svg?v=135d2674f8fc1116512d6d6837fbee8434de5a5c0e83dbe0689244e0a261128a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
