export const name="vaccines-fill";
export const id="dl_da090b1dab75d0937611";
export const url=new URL("../icons/vaccines-fill.svg?v=7421790190a07de3121d8a17fb600e578097e2a339ab86372c31836e2e1af3c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
