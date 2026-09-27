export const name="no_sim";
export const id="dl_bee64aedde0f8583dc52";
export const url=new URL("../icons/no_sim.svg?v=a6129175d996baa2ec02110b17f1df3c60ca1cad705e6edf72839948ba0240e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
