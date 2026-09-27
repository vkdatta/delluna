export const name="prayer_times-fill";
export const id="dl_c07cc9fa50c9bd0e3fac";
export const url=new URL("../icons/prayer_times-fill.svg?v=733f3992bd2acd883f80308d3b1c9d207e0a13acd8698726497d409278d879ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
