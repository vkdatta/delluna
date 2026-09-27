export const name="sdk";
export const id="dl_0b71080332d365174133";
export const url=new URL("../icons/sdk.svg?v=3ea2e0ca6706e624e73ec32a7f1c31e899454117e4550560dbf408645836fbad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
