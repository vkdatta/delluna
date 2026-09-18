export const name="local_hospital-fill";
export const id="dl_05151090efa24adbb387";
export const url=new URL("../icons/L/local_hospital-fill.svg?v=58040d57bd40a5808276b0ca707ef3619746c39abd1e11ce0c0178dc019c887b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
