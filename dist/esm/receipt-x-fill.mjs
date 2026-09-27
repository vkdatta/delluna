export const name="receipt-x-fill";
export const id="dl_8a4c2f5ef33240fa809a";
export const url=new URL("../icons/receipt-x-fill.svg?v=1eee76cc92f9fc35ad314690628305f484f5be0671a912fd7d8b9186c2da4cdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
