export const name="backup_table-fill";
export const id="dl_0ffc2e2f66e80751a78a";
export const url=new URL("../icons/backup_table-fill.svg?v=d24322ee089e97ef318287bb70887664db16bb0600b1d7e3d26c5024d47fd0ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
