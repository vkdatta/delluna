export const name="sunglasses-thin";
export const id="dl_d36e11a5907c4fe88f0d";
export const url=new URL("../icons/S/sunglasses-thin.svg?v=fdabc0130e536f9a81813317680fe3c1bea16f895724ad19f1e68b4974b4f19c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
