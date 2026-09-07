export const name="arrow-circle-up-left-bold";
export const id="dl_e736fefd2186481f9f1c";
export const url=new URL("../icons/arrow-circle-up-left-bold.svg?v=14e8256f27428bb9bda87a2e252b2b45504cc5b19ea58a7601ae243edd593bb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
