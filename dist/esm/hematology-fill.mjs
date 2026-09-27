export const name="hematology-fill";
export const id="dl_aec5f11c4dd3f513796c";
export const url=new URL("../icons/hematology-fill.svg?v=96fbee8fc70caea1b255a7f623c0f192e0dfbb732c8c1a9aefa176e9e2024028",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
