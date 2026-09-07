export const name="currency-inr-duotone";
export const id="dl_b136d93c80254faa82a6";
export const url=new URL("../icons/currency-inr-duotone.svg?v=1b05b98b75b9f63ccbce8751f734bb6511235d19d790216fad5d4b56808ab250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
