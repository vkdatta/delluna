export const name="outbox_alt-fill";
export const id="dl_5a37f65f157e476a8914";
export const url=new URL("../icons/O/outbox_alt-fill.svg?v=aa0cf27cc3618f727c0699bb3de9865f0a0d4598e1444493e6d24e71f1b9caa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
