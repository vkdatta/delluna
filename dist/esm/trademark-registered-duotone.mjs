export const name="trademark-registered-duotone";
export const id="dl_afa58d4557f8e58bbaea";
export const url=new URL("../icons/trademark-registered-duotone.svg?v=c69d5f3051cb75fd5e15b219ba2cd92fc871d8cff31b2dc7aa1efd53b0bfb9d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
