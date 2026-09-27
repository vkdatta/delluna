export const name="contactless-fill";
export const id="dl_3f7d62b77b654e812b61";
export const url=new URL("../icons/contactless-fill.svg?v=c462b4ecc95f526cf94ee7e2363881194ff550de877ceae00232950e6f80f08a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
