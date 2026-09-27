export const name="stamp-fill";
export const id="dl_d4d10243b930a6dd5d39";
export const url=new URL("../icons/stamp-fill.svg?v=5861088b12bb343ba0b50e14d9284120407c559057394c0aa9c8bb4f90619799",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
