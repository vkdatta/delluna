export const name="borg";
export const id="dl_3d1ae89767184fea9dd0";
export const url=new URL("../icons/borg.svg?v=9d9724b95211cd7599bb74bc223d9137bb8b2f84e6da520b59c4176a7a31ce1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
