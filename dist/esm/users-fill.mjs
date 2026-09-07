export const name="users-fill";
export const id="dl_29225720b618452882ed";
export const url=new URL("../icons/U/users-fill.svg?v=6104c0634ed5b574e261acc05a3575db8abfb4ccbcb3bf12f5359a431303783b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
