export const name="arrow-up-left-fill";
export const id="dl_c42d3d57eff641609780";
export const url=new URL("../icons/arrow-up-left-fill.svg?v=fde985e52587a2c4f007f20a8a82581d6bce2a7ddd51c2e265f8765119283b95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
