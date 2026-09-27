export const name="approval_delegation-fill";
export const id="dl_bf8643228154c506cd56";
export const url=new URL("../icons/approval_delegation-fill.svg?v=697a808d677c3fecafb2b3bbdc5045771e1f405d88eb346417bce26616c035be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
