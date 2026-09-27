export const name="contract_edit-fill";
export const id="dl_7ab1e4dc2d26e6911740";
export const url=new URL("../icons/contract_edit-fill.svg?v=2ab708f09a4a57264cba6720b9b1b5cf215eedf8ce96a1eea6e99b8c77cb5548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
