export const name="nfc_off";
export const id="dl_7afcbaf309c7ab61a5db";
export const url=new URL("../icons/nfc_off.svg?v=785a3056af522d1827d8755260a5eefd3b2da31873f62fcfec222b647c0d39d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
