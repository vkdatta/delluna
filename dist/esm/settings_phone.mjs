export const name="settings_phone";
export const id="dl_6a3676e13212bbdbfabf";
export const url=new URL("../icons/settings_phone.svg?v=921f734c6cf8a4f5ae09db7da92fc511c350fa226a0b6ea6f71317b7bdb89071",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
