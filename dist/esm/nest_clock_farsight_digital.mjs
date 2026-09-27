export const name="nest_clock_farsight_digital";
export const id="dl_388b0abdca4963343724";
export const url=new URL("../icons/nest_clock_farsight_digital.svg?v=ad500da432fe94794e24daed77b700fba02885fbb6f39390ce8e3f78ffc52b0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
