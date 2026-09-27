export const name="sports-fill";
export const id="dl_1ba92839d48a8a30fe48";
export const url=new URL("../icons/sports-fill.svg?v=4cf27908859877baf316280b648452c3904504ad061ecfe8c6826564eaa7c625",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
