export const name="7k";
export const id="dl_d99b4b51887818efe675";
export const url=new URL("../icons/7k.svg?v=f5c28e64d8335877052cd254f99d766778f1f83e49cf4be1ff09c380f62849c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
