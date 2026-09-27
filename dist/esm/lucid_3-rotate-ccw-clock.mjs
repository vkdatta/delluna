export const name="lucid_3-rotate-ccw-clock";
export const id="dl_c84fdcb5c2ef4728afc6";
export const url=new URL("../icons/lucid_3-rotate-ccw-clock.svg?v=d56eb2ed974fed96cbd851a11639dc1675ec0d4c74dc15d312392e3e6c06a0c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
