export const name="minus-circle-light";
export const id="dl_b89b11d8629b4a359ee9";
export const url=new URL("../icons/minus-circle-light.svg?v=f2c8c288827fabbba96bd143b6319e1da9cb728059fce34be4fd77a00bfd2a3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
