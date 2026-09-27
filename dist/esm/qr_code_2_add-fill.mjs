export const name="qr_code_2_add-fill";
export const id="dl_cd28d66e765f8f73a1e4";
export const url=new URL("../icons/qr_code_2_add-fill.svg?v=dfb4737cd9b130605babb31663e08c09050296ccde16268d6e5c89b06c7d77eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
