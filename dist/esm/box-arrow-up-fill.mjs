export const name="box-arrow-up-fill";
export const id="dl_5f92ecfd890046a58d8f";
export const url=new URL("../icons/box-arrow-up-fill.svg?v=64906161f0c07c0faea4ba7e2605059d2ab90660f796c8d938bf59158554d63c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
