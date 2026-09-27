export const name="lucid_3-receipt-text";
export const id="dl_c8000d841aff4c41a34d";
export const url=new URL("../icons/lucid_3-receipt-text.svg?v=242db82926f118ce19e7b230d45cdeabccad9099fd9e96379229d095324ddf62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
