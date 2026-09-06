export const name="export-duotone";
export const id="dl_223841854d254ef199ae";
export const url=new URL("../icons/export-duotone.svg?v=9d79062b1f17b6d94a4c12854e1d2813cd0568a003d1cfc90651291564f75e92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
