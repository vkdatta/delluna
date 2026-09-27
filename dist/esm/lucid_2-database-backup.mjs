export const name="lucid_2-database-backup";
export const id="dl_b63690a24bd94c2ab362";
export const url=new URL("../icons/lucid_2-database-backup.svg?v=f7b4e1a5de975415e43f8114c574fd4479bf864b4303ca3e40ee7bb832c21020",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
