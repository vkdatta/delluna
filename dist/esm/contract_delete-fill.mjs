export const name="contract_delete-fill";
export const id="dl_774e4f80b4d743778bdd";
export const url=new URL("../icons/C/contract_delete-fill.svg?v=bde4f53a48e65f5e2803e5b841481c92cf3006a860ab659ddab9b9641b5374b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
