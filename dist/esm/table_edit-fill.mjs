export const name="table_edit-fill";
export const id="dl_42aa84f3cf5b412ca124";
export const url=new URL("../icons/T/table_edit-fill.svg?v=becce759f634fe5ada07fdb8c1560f04498927b7be8b07a2d7f1ee4900e6cc7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
