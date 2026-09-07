export const name="island-fill";
export const id="dl_fca75b2b8fff44bdacc1";
export const url=new URL("../icons/island-fill.svg?v=44c1fc7a084b4ebfc8089c49b32965d193204eafec7a8ca6ef1fef974557aa65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
