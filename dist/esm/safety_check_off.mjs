export const name="safety_check_off";
export const id="dl_8ad27d1971e5f32c1452";
export const url=new URL("../icons/safety_check_off.svg?v=bb4c69537fb1d2d6c39d9d4fcbc70750e01cbc088ed9e5e74250dbbb83a919d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
