export const name="switch_access_2";
export const id="dl_3eb28a948e447dbe0567";
export const url=new URL("../icons/switch_access_2.svg?v=bd239244f24ccf49ee4329197ea5371523b51defb2624fdf81de3ad6a6387838",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
