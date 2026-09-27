export const name="phone-slash-fill";
export const id="dl_d02975d3b5004e7aa522";
export const url=new URL("../icons/phone-slash-fill.svg?v=00d228eee7efa9a1be3035f52ada6ab815710dd6336b4362b542f80ce8c2ba50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
