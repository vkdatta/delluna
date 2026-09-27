export const name="sports_baseball-fill";
export const id="dl_657146ad81b1ebf39058";
export const url=new URL("../icons/sports_baseball-fill.svg?v=23588141cb4c246e136c762fef356d06c5be7b0cf13c49a6be7f5f687b9f1af1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
