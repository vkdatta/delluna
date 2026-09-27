export const name="shield_with_house-fill";
export const id="dl_2c2af4ad905b50387bd6";
export const url=new URL("../icons/shield_with_house-fill.svg?v=3bd9854f81e43606d3c9b86baee28c3c591ebd17251c2a6fcd6a12e89910b156",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
