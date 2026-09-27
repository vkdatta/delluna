export const name="account_balance";
export const id="dl_b9ae595edc21f4b743b5";
export const url=new URL("../icons/account_balance.svg?v=92f42471df7e62c9250b7ad242397439376e412457770c05df5f4d986b800ed1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
