export const name="voicemail_2";
export const id="dl_e7f040095df5e9934d13";
export const url=new URL("../icons/voicemail_2.svg?v=50709dd0c678e01aa4af5c082d8aa1ab65b32e0f89dafa0084f0ad019451e146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
