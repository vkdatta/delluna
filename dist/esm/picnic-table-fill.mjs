export const name="picnic-table-fill";
export const id="dl_f0ed82f0a9234cd78bbc";
export const url=new URL("../icons/picnic-table-fill.svg?v=85528bd849e2024881d5a28b358f9c855a01862e15fb5348583e69a914c798d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
