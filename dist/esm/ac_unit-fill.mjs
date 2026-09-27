export const name="ac_unit-fill";
export const id="dl_286f726714949a6b39dc";
export const url=new URL("../icons/ac_unit-fill.svg?v=66bcd65aa37e582c65e3d83d76d903e62e835b2ef154ab08ac0a2ae849cceb91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
