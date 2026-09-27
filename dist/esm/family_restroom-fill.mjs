export const name="family_restroom-fill";
export const id="dl_7f51a4ae36f577d9fc00";
export const url=new URL("../icons/family_restroom-fill.svg?v=a536b1219cc4edd0bf6524f8da30852645c3a603ee4842e6957176f390c29485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
