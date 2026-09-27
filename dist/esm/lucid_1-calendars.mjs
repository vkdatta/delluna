export const name="lucid_1-calendars";
export const id="dl_b6237eed411a4a299800";
export const url=new URL("../icons/lucid_1-calendars.svg?v=3e27a45cd395b4f3f63516443c67a7c07179e3417d29f61b0abd0ce443fca9e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
