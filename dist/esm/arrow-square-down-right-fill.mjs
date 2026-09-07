export const name="arrow-square-down-right-fill";
export const id="dl_0004fef34c7d40c6a894";
export const url=new URL("../icons/arrow-square-down-right-fill.svg?v=d6a374ec5590c0b957a3c6c945359b7247487f14d0bf5d674262c97e48982248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
