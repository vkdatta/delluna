export const name="select_all-fill";
export const id="dl_e2429e4cd0050a990945";
export const url=new URL("../icons/select_all-fill.svg?v=3063ccfc3b70d86b1caabadaf8e9cc276f80e116a9319e4e7f03589fe715a69e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
