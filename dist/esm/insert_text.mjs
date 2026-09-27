export const name="insert_text";
export const id="dl_52c8db1323820903958c";
export const url=new URL("../icons/insert_text.svg?v=8ea98a3698207858e1e49f0bc49009a1859376e2364307baad1a7e1230e65784",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
