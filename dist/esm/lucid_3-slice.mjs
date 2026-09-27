export const name="lucid_3-slice";
export const id="dl_709b9b0f33c740089ef8";
export const url=new URL("../icons/lucid_3-slice.svg?v=bf959359d10f85526999530860c3064669ffb018da8c64daf3dd769986e83bd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
