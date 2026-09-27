export const name="arrows-in-line-horizontal-duotone";
export const id="dl_cd0137d943744233be8e";
export const url=new URL("../icons/arrows-in-line-horizontal-duotone.svg?v=a86708fd110909f187e57c830ddce64a99ecb30c741fbd80e0513304111dd5fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
