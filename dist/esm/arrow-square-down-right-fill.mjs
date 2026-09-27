export const name="arrow-square-down-right-fill";
export const id="dl_0004fef34c7d40c6a894";
export const url=new URL("../icons/arrow-square-down-right-fill.svg?v=2fd96f323639c206ef262ee2aa05b33dfb9e6e286194c28a05f44b439b927176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
