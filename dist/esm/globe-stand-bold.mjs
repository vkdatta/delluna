export const name="globe-stand-bold";
export const id="dl_ac27d72f81dc490ca994";
export const url=new URL("../icons/globe-stand-bold.svg?v=0154560a0c1615d731e5283f4b3007add148ceb1880bc3512beb3d5249b80db1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
