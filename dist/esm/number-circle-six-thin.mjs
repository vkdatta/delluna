export const name="number-circle-six-thin";
export const id="dl_3451a4a62ab340318a87";
export const url=new URL("../icons/number-circle-six-thin.svg?v=76feb33cb6dc9e3f6024dd55a7ecc22ddddac3cb9dae2a3c9d40becad382ac81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
