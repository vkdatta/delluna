export const name="gender-neuter-duotone";
export const id="dl_dbfa48dde2ad4c29a3df";
export const url=new URL("../icons/gender-neuter-duotone.svg?v=476882adee90d5da76fcb301a3120a06b86ad54a77643da625f2c4a9a4fa61a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
