export const name="columns-plus-left-fill";
export const id="dl_b6a5f3e3dcff43d4a827";
export const url=new URL("../icons/columns-plus-left-fill.svg?v=4dead6e06dcacdb676153ce0a654575fba0f6206aabe9ecb90739f9ddd3fe2e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
