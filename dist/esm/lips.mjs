export const name="lips";
export const id="dl_e10418340e1cf8182802";
export const url=new URL("../icons/lips.svg?v=2314d18bab2ef08a89f0861c7951a111418cc72b736d169b77439a7d08599cfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
