export const name="border_all-fill";
export const id="dl_026498ac0ac3f511d084";
export const url=new URL("../icons/border_all-fill.svg?v=873e1c7a02a06d1246bee44fc9b583773408e14acc3a7c43eb1d1f9ae5e90386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
