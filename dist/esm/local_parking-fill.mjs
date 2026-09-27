export const name="local_parking-fill";
export const id="dl_37bf5a2066adfd78ab67";
export const url=new URL("../icons/local_parking-fill.svg?v=594b5f8a9b72ee525c1a812f54adab68de471ff2749b4d3dc9e0d28ba6088803",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
