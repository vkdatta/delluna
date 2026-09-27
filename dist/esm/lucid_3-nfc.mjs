export const name="lucid_3-nfc";
export const id="dl_5178c849b83044f18069";
export const url=new URL("../icons/lucid_3-nfc.svg?v=06c5209ee1e69cd3267f06d634b73ab293ce3b559aa51bf3423029527b55f1d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
