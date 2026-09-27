export const name="lucid_1-circle-user";
export const id="dl_10201d386cbf4cce9a4b";
export const url=new URL("../icons/lucid_1-circle-user.svg?v=4ab5045967243d98abd08c768d41aee84362cdcaeb518a112bbdd5dbf5bdf2e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
