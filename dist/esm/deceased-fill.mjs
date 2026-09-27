export const name="deceased-fill";
export const id="dl_2296160790f20fbe93c6";
export const url=new URL("../icons/deceased-fill.svg?v=74d3113f126a1d06d145755dbca3c75bb8bc18d80c8a177e570d69a39bc8fd11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
