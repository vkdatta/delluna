export const name="users-four";
export const id="dl_03e2d81a2e268ead7da0";
export const url=new URL("../icons/users-four.svg?v=e41a41bc7aaf8142d25ce84e1a42795d56b12d85bba11e4fb4eeaa7b419d1989",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
