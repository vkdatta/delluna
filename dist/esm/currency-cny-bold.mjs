export const name="currency-cny-bold";
export const id="dl_e1578fe2273e46bcaadc";
export const url=new URL("../icons/currency-cny-bold.svg?v=f2f73ff2078fb3945cbc7610b5619db35097301e6e1ed38b3f0b06df62bfa3ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
