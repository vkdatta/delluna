export const name="yard-fill";
export const id="dl_f2b45787d4e0353d408c";
export const url=new URL("../icons/yard-fill.svg?v=8e7bdb0401ecefbf2e27a2ca773620b4436d4638589a0a44d5bc105ef944c705",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
