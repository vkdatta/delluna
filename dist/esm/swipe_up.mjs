export const name="swipe_up";
export const id="dl_ee2f9e9351d14497ac0e";
export const url=new URL("../icons/swipe_up.svg?v=bdfff7961361643fb4c3a61ea1b89eadbb4dda6e766b302fc48ec2c3efa36797",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
