export const name="person_play";
export const id="dl_b2cd47e8f550dba52f9a";
export const url=new URL("../icons/person_play.svg?v=7f7d389e50ef6815241b8d1f39cc922423619f4f303c0c9362fcd723f5e2b241",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
