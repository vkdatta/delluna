export const name="party_mode";
export const id="dl_741affe82dff4f302825";
export const url=new URL("../icons/party_mode.svg?v=7e1f4ded6bf0b088e65370248a5131b7f44876195a30e14cd43ce4d0362652d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
