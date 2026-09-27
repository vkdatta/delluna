export const name="sd_card";
export const id="dl_65b22c6b2caf3181c574";
export const url=new URL("../icons/sd_card.svg?v=1928f5d308222f2a24d4ae385c9287f6c939b4fb95f4547dbefae35ea2d23634",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
