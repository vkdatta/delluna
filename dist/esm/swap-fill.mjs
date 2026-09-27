export const name="swap-fill";
export const id="dl_d4e3d98f915413f4df16";
export const url=new URL("../icons/swap-fill.svg?v=461a4e2142b4711a0c109b75c51c00f3f7feb5dbed10ddfbfd61bc00fd4304b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
