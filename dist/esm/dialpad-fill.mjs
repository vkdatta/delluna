export const name="dialpad-fill";
export const id="dl_af6da5012f2e684b958d";
export const url=new URL("../icons/dialpad-fill.svg?v=25e138c4af71003235ed204a9f0e7b54af692f43774d991ba7b8281bc55013d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
