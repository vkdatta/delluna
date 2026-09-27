export const name="lucid_1-arrow-down-wide-narrow";
export const id="dl_e085e3f8c5dc4b08a690";
export const url=new URL("../icons/lucid_1-arrow-down-wide-narrow.svg?v=d5fbe90d2cc7dd3495ebc054f91cf749aac37128094a32d32c8acadfe96512ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
