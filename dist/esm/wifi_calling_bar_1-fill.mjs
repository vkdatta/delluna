export const name="wifi_calling_bar_1-fill";
export const id="dl_5fbd973463af68f60e71";
export const url=new URL("../icons/wifi_calling_bar_1-fill.svg?v=d9e6d5965b3553be69cb819f774f546c146ce8f0e63f407d48bb6e13e4fe7184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
