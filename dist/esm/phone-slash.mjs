export const name="phone-slash";
export const id="dl_e5e28d632a8242a3912a";
export const url=new URL("../icons/phone-slash.svg?v=0b09433744187ced9ec9b7ab5d115dab193f4ac5850bbcc1391c392394b7b513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
