export const name="legend_toggle-fill";
export const id="dl_2fc066c0a16c746e3e97";
export const url=new URL("../icons/legend_toggle-fill.svg?v=4276beb5848a6a89c1cf1a28c5a820eae5a6b99e5994133920094d22fd0cfb32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
