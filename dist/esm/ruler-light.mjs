export const name="ruler-light";
export const id="dl_ad4b39e168324e908844";
export const url=new URL("../icons/ruler-light.svg?v=0822cb75ba3855bb2cd5fd5afbab65548c4d906cfdca9d97afead083679a36ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
