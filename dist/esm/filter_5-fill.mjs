export const name="filter_5-fill";
export const id="dl_8fb158779cb66742ca57";
export const url=new URL("../icons/filter_5-fill.svg?v=b1ef4c2bcc2c942dafcac18358028c88c303888f927fe868ecf880b4bb0c9810",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
