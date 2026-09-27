export const name="phone-pause-duotone";
export const id="dl_f5dd2ddd61fb40839809";
export const url=new URL("../icons/phone-pause-duotone.svg?v=4ad7e02b87eaf0379b7dc53bd0399e1c4cde6452f6db5754a4a0a0bc39ff96b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
