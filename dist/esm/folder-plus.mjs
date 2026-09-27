export const name="folder-plus";
export const id="dl_06fb9c3d67db4139aeb2";
export const url=new URL("../icons/folder-plus.svg?v=229d3cda489074e5e818e3888ca3151c11110a4ad5617aed95ff98005886c028",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
