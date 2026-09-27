export const name="mail_off";
export const id="dl_ccaf1ae1096d45504d6b";
export const url=new URL("../icons/mail_off.svg?v=695e3db853b9c4131dd0cbf9877cdb5dc9a948cc3c7c3cd29777909c169aaf90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
