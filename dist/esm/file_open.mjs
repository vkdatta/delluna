export const name="file_open";
export const id="dl_fc11c1b30ed2ac3a417d";
export const url=new URL("../icons/file_open.svg?v=65ce62d7c4b4829694bcc508ab5dcfa177aa4e189e9b924b341420a0871b57da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
