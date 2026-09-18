export const name="groups_3";
export const id="dl_e76f58d693074f99b8fc";
export const url=new URL("../icons/G/groups_3.svg?v=21b4809a848ab336abe56bf81d66d759808d95d75a20ed92016f7048bebcdc84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
