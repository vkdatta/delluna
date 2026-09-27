export const name="media_bluetooth_on-fill";
export const id="dl_e304b75f9fcc556e1e58";
export const url=new URL("../icons/media_bluetooth_on-fill.svg?v=673a042bf4a111e74f90d7a470077c1ba9809eb71c65323c4b58925bad57760a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
