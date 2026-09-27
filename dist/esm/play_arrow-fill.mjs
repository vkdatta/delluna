export const name="play_arrow-fill";
export const id="dl_62a9817247e5a8a96196";
export const url=new URL("../icons/play_arrow-fill.svg?v=d48ba67aa8927af412c0cfbb8b3441c2581e95f049e2f13ccf538d206b3e1921",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
