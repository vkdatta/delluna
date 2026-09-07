export const name="cloud-duotone";
export const id="dl_95ec4c3d9b1b49d7aa74";
export const url=new URL("../icons/cloud-duotone.svg?v=d1a4338eccb1f8ea3353303980f15859a0a1bbc6af9d1546613182705a9b5c16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
