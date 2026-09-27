export const name="speed_0_2x";
export const id="dl_bc11c739a84619576a52";
export const url=new URL("../icons/speed_0_2x.svg?v=0fafec94198e58d603a39b86ffeaa27810686b894fe506508ef747e38348886d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
