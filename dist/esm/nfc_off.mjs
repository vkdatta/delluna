export const name="nfc_off";
export const id="dl_311f438aa347ec12984b";
export const url=new URL("../icons/nfc_off.svg?v=19f9aad69ba0aba05cb0d03c39915f4e838eb748574b9e6ab32b288458058734",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
