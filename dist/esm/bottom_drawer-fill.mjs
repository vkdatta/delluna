export const name="bottom_drawer-fill";
export const id="dl_b832d48b77dfbfb41239";
export const url=new URL("../icons/bottom_drawer-fill.svg?v=538f2694f4f86d7a2d52912b47859234f0f76a9b49804f176cf84fa36c3dc270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
