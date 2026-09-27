export const name="outgoing_mail";
export const id="dl_03fd8e228f63b92504e1";
export const url=new URL("../icons/outgoing_mail.svg?v=b2c9c711000463d2950b99944978836dc16641e9ea979021968bcda86f9db28a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
