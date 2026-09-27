export const name="lucid_3-radio";
export const id="dl_a642c989a50b414da657";
export const url=new URL("../icons/lucid_3-radio.svg?v=3781e67791a2d554737c3d735f7f12e0073c06d822089ef66efcdcb8771de278",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
