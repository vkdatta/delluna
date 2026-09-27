export const name="conveyor_belt-fill";
export const id="dl_733cb8be377101a0d8af";
export const url=new URL("../icons/conveyor_belt-fill.svg?v=af0dd2e574afd6b3a82c98bfba1625f4d118c188a6c2b32ef6326492f8635cd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
