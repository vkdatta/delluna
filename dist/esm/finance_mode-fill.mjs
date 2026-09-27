export const name="finance_mode-fill";
export const id="dl_5d6935a56a98bff868e6";
export const url=new URL("../icons/finance_mode-fill.svg?v=8bcf25aa30d252cb1e1dbdd46a648afe7f1a1fa290e3eb2924e5995081b8bb2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
