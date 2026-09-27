export const name="volume_off";
export const id="dl_f5d47d2bc8684222d643";
export const url=new URL("../icons/volume_off.svg?v=12f19d90de43e6d619a2ac0c29096930ae6686a85c696946f8106556d82d5122",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
