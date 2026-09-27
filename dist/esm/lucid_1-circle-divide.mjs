export const name="lucid_1-circle-divide";
export const id="dl_fabce23b1b794e1d926f";
export const url=new URL("../icons/lucid_1-circle-divide.svg?v=71d5646495e9478e0030e4cad9c8295a9b8d0ec37ad7a4d339a44b937d00216a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
