export const name="currency-ngn-light";
export const id="dl_a29ae81a7d1a4ab9b755";
export const url=new URL("../icons/currency-ngn-light.svg?v=dd019ccf48d5d50939c68ac23253d212c0317669ad4f8553a45fcb72a6f020da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
