export const name="expand_all-fill";
export const id="dl_00446c89913f4a28b1d5";
export const url=new URL("../icons/expand_all-fill.svg?v=87f5aee1caacb81cd2364642bc9e3d777dd2caa51e9f5195653938a1bb2bd6d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
