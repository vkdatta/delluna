export const name="group_work-fill";
export const id="dl_f661b57eb470469c6fcb";
export const url=new URL("../icons/group_work-fill.svg?v=2d56f4eb92519984af4a0e475ab43e813e4b9a45929138322814f45d5f3ad236",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
