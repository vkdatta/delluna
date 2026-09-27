export const name="local_hospital-fill";
export const id="dl_31ce11fefb360cfef4a1";
export const url=new URL("../icons/local_hospital-fill.svg?v=dd9e731a99f64ae4c222a27e7a08705732df0143b207d80ae17803bdf0d6d7a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
