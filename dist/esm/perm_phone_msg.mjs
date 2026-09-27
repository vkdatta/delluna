export const name="perm_phone_msg";
export const id="dl_180957c2b8fcdbcca146";
export const url=new URL("../icons/perm_phone_msg.svg?v=e6330fbfa83c6f706109435c1366500d6563239755f9e1a2ad9ff3f135f6a6c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
