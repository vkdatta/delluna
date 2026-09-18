export const name="contacts-fill";
export const id="dl_ccb548090f0747c19dc3";
export const url=new URL("../icons/contacts-fill.svg?v=079353650649b656388d315a7ed3c88bcb7f34fcd4b34c2381768cadc0de6eaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
