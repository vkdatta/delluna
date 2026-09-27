export const name="lucid_2-database-backup";
export const id="dl_b63690a24bd94c2ab362";
export const url=new URL("../icons/lucid_2-database-backup.svg?v=c8d4dd18dc4bd51b027cb870128ba9cbda5a2e891dabd93fa5227944b5862653",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
