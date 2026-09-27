export const name="lucid_3-spotlight";
export const id="dl_d948959185c74c728d36";
export const url=new URL("../icons/lucid_3-spotlight.svg?v=fb67c623edfa91d1be9ddc625682315986283603a3e4ff758da1a77c5749bb82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
