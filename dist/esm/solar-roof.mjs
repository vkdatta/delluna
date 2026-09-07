export const name="solar-roof";
export const id="dl_d6dd9270603c4660a6f1";
export const url=new URL("../icons/S/solar-roof.svg?v=fa19e3b49ceaaf2f7f703cb8f64e5e1ac2b5ba63e8303b7c3fa6a2c7d783f56c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
