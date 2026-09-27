export const name="8k";
export const id="dl_f92bbe74926292a64279";
export const url=new URL("../icons/8k.svg?v=03a474251327aad90bf5088b30f8299b03a38c1bcbc2d21c89ed734eb205566b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
