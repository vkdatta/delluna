export const name="sensor_window";
export const id="dl_01196dbc953445cb7003";
export const url=new URL("../icons/sensor_window.svg?v=f1d8ad5550e01e2b660cac47fec566ff28070b9adc1817b286bd9660f4669252",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
