export const name="doorbell";
export const id="dl_2459e581b7eb135843af";
export const url=new URL("../icons/doorbell.svg?v=d4a489d96ba8c0abce7380b545f2fdcb68795dbc07c9f93e3619717d326624ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
