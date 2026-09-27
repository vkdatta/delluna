export const name="lucid_3-message-square-quote";
export const id="dl_8a5eda9b0ccf45feb4db";
export const url=new URL("../icons/lucid_3-message-square-quote.svg?v=7f4f475be22c059f2e28594e652410cff49f9dbdbcd1c0fa2df41bae37392080",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
