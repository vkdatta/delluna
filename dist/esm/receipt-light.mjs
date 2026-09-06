export const name="receipt-light";
export const id="dl_c94b2b711e78498ea4f6";
export const url=new URL("../icons/receipt-light.svg?v=9ca23e6019a59b600e69b1d2ac2ab8251f070e1f158cfe4a3eddde2fbd8f580a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
