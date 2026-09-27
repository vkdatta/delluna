export const name="science_off-fill";
export const id="dl_ab2b34a49ba084918520";
export const url=new URL("../icons/science_off-fill.svg?v=7d3b3cad975493963afff327c8f0f8bf1a2492cc844a04448046f0a00c824eb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
