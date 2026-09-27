export const name="border_all-fill";
export const id="dl_f01c0bf669095f2300bd";
export const url=new URL("../icons/border_all-fill.svg?v=08fdac6ad4037d83e25a37717a20aec3951ae91f6181eb5a4e3cb90c3ae76e19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
