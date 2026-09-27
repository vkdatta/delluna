export const name="fork_chart-fill";
export const id="dl_413c04a636c4ac85dd36";
export const url=new URL("../icons/fork_chart-fill.svg?v=95c5d436639f2ed4f73f3aa584b3ffadea34bb125f3bf9829f1a47cd3a2feca3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
