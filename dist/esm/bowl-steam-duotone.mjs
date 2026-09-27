export const name="bowl-steam-duotone";
export const id="dl_9747f93412e44fd49008";
export const url=new URL("../icons/bowl-steam-duotone.svg?v=1c09e74e321e2c627b8b666d321df46d736e612efd504664100096522664b75f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
