export const name="car_tag";
export const id="dl_2976b9215e05f64b82b9";
export const url=new URL("../icons/car_tag.svg?v=bfb4ea281ff5be88772e8921ffe9c42c678a2ac4ce2727fb6e6827266af4b383",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
