export const name="manage_accounts-fill";
export const id="dl_08fe562fc7a936fd1c6e";
export const url=new URL("../icons/manage_accounts-fill.svg?v=5b95ef10548d85f6849d13a4f7eac3531c81d61457465221060b5d83e831dec5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
