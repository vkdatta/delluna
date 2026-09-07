export const name="moped";
export const id="dl_beb57482589e40f69970";
export const url=new URL("../icons/moped.svg?v=65d91aac262a659fcd6bcc528c8b70cf1a804808f3adc33207d6279295f2a797",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
