export const name="next_week-fill";
export const id="dl_2031b668c357ca4b8968";
export const url=new URL("../icons/next_week-fill.svg?v=b73027a94b61b7005712112dd54ef99a9e074c423df84c6ac2489658704a506f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
