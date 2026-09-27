export const name="lucid_3-square-check";
export const id="dl_65a2435f246e45c595bc";
export const url=new URL("../icons/lucid_3-square-check.svg?v=5d3c412ee237019629c0c871ee4a0afb663474fd7527db7ca6ef3fd558e2e0da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
