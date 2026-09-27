export const name="mobile_sensor_lo-fill";
export const id="dl_1411563b79f23058a3e4";
export const url=new URL("../icons/mobile_sensor_lo-fill.svg?v=7bc13b401b0f1988a2237b256866ebbd806ef0946e2be56e05ab30543c16aa4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
