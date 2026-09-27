export const name="battery-high-fill";
export const id="dl_bf71c5c484074a6baf02";
export const url=new URL("../icons/battery-high-fill.svg?v=2f504447bc92667ca083df00c4d4dd0d5dff142ecc637949c8827993e13d1674",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
