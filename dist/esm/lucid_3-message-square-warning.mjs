export const name="lucid_3-message-square-warning";
export const id="dl_1eb59017d35742289f77";
export const url=new URL("../icons/lucid_3-message-square-warning.svg?v=e6d058c0adbd17e2d28a1d5782b47422a57a9a3f8a454409bf69c09353b1b324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
