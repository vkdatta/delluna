export const name="bia-fill";
export const id="dl_b2f1f39b62986fa6d8c1";
export const url=new URL("../icons/bia-fill.svg?v=fee72cb2baf8c9014e1d4d1ee746328f6beeb3f2b2be97f4180e9ff443c2188a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
