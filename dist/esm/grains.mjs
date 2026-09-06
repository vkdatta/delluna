export const name="grains";
export const id="dl_0d318c9d9647434aba5d";
export const url=new URL("../icons/grains.svg?v=80edcd042baecc828f0b4bcbb7aeecf32c2da1f146f3d4d10ca1fdca216772e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
