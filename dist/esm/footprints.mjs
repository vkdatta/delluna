export const name="footprints";
export const id="dl_b9918a78faaf483382ab";
export const url=new URL("../icons/footprints.svg?v=4c3b12119a9eec0e5edb86357280dc1c1d5a64301a7f04afb78cf7003c5a5bf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
