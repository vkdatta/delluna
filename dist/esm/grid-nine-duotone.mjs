export const name="grid-nine-duotone";
export const id="dl_1498d8b8a1b14e3e86a6";
export const url=new URL("../icons/grid-nine-duotone.svg?v=a2ce684a854f339cada68550e5da7fa0e881d962a87f1e34d9a3e706d1647050",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
