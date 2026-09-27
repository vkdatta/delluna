export const name="lock_reset";
export const id="dl_26c1cfcc89caee9dab32";
export const url=new URL("../icons/lock_reset.svg?v=5badbcc0708c76de6664bebb19bba053856ed96701a79f74159c27a58b2df35e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
