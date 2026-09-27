export const name="hospital-light";
export const id="dl_a6dbfd03a2e64aa9a4ba";
export const url=new URL("../icons/hospital-light.svg?v=81af06c32f4cd7fd4b4c53b06110b6754290eaa2765ca5ec548584900ee71bfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
