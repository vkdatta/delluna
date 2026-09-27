export const name="group_work";
export const id="dl_691d69cfe37baf1eb04d";
export const url=new URL("../icons/group_work.svg?v=3c3df76dee9f18d5b51d789f024d90042c1b2338456aac51793657bba61cc59f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
