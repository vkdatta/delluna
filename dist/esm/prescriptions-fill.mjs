export const name="prescriptions-fill";
export const id="dl_630080d4b9527a3bbd76";
export const url=new URL("../icons/prescriptions-fill.svg?v=4ede36d1dab133b8e7f06f581f5ee3774d0dd5da905ecc7518ee7fa3ddded560",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
