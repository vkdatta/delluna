export const name="phone-outgoing";
export const id="dl_a296aca4591545d0a2c4";
export const url=new URL("../icons/phone-outgoing.svg?v=9bf7ca4260916791ad7faeb4a5273c2f152aeab3b18999b9e3d7fbfa8fd0edc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
