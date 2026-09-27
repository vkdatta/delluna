export const name="nfc_off-fill";
export const id="dl_8998042d1d7b67b1d043";
export const url=new URL("../icons/nfc_off-fill.svg?v=ac42f12cd73bac05c3bf3a30e9b453643eb7f9c2e66829252025d0717415cefe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
