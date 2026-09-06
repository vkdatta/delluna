export const name="house";
export const id="dl_624d964041b4487695cc";
export const url=new URL("../icons/house.svg?v=180e9259e99e23da197b59b19394d006d6a5d33e384cc2b9c8381cb0214a5716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
