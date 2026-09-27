export const name="grains";
export const id="dl_0d318c9d9647434aba5d";
export const url=new URL("../icons/grains.svg?v=cf2fd77a0bd672865594f6b0336067b482d6d5871f2f895774e3efc05b7283a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
