export const name="cottage-fill";
export const id="dl_96e9d355f50ee2b61cc9";
export const url=new URL("../icons/cottage-fill.svg?v=e784cf7b68f30e64d01f4b240b0e0cecea1d814ebb484eb815de0c64ca2ca6e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
