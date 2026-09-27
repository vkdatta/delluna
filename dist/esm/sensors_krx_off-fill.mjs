export const name="sensors_krx_off-fill";
export const id="dl_addffb9df49de69e5521";
export const url=new URL("../icons/sensors_krx_off-fill.svg?v=bacec2cc0ea47a27b1647398cad8a2642553794220d0f2d2653d808e917ceb39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
