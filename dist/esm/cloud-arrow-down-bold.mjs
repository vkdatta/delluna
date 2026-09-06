export const name="cloud-arrow-down-bold";
export const id="dl_bbea51765f1c4d43ac79";
export const url=new URL("../icons/cloud-arrow-down-bold.svg?v=c82ae598a8117474d636d158222cef55671df074ba71dacbafab1dd37f501b37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
