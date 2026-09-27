export const name="radiology-fill";
export const id="dl_ad2f9fe5e181c4f16936";
export const url=new URL("../icons/radiology-fill.svg?v=5be8ab97cd6df4573ff0df7635f39a17fbe4d2025c6ad60adfe8ef829ef69509",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
