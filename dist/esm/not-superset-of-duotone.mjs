export const name="not-superset-of-duotone";
export const id="dl_bf58219265e34cafaae6";
export const url=new URL("../icons/not-superset-of-duotone.svg?v=3d3fa82476e3cd22fc39e4561181abaaff0e8eca842d5765e33d12e12005b1e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
