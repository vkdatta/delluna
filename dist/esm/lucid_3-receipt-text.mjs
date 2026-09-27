export const name="lucid_3-receipt-text";
export const id="dl_c8000d841aff4c41a34d";
export const url=new URL("../icons/lucid_3-receipt-text.svg?v=e93994b35a1553aa3ca40cee65afd6507a50ea29e98e9f980ed77f4dd81d4c7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
