export const name="phone-slash";
export const id="dl_e5e28d632a8242a3912a";
export const url=new URL("../icons/phone-slash.svg?v=88e4915f1f7bec3a697a28d46be21ffff1ffc4b554f7838f0c79622e46454888",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
