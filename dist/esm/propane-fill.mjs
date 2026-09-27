export const name="propane-fill";
export const id="dl_ce40649914ea8995f619";
export const url=new URL("../icons/propane-fill.svg?v=ee25aaa468886da57b69f764e1e5fc7fafe3e58717d54755ebe0fa092360cfe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
