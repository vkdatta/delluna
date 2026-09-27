export const name="grains-duotone";
export const id="dl_8549b741c5d9415db211";
export const url=new URL("../icons/grains-duotone.svg?v=0e484a5bd5d1b174dac8fbc62f266bf72dc288fe41b953495bc26d831cdf7fdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
