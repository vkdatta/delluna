export const name="wave-square-light";
export const id="dl_4faf3db5db5e2698914d";
export const url=new URL("../icons/wave-square-light.svg?v=5b660ccda25ff12ecb35c3cdd3dd275e892f56b2d862e2037d041ca82dd029ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
