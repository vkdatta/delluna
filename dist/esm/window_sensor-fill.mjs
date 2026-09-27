export const name="window_sensor-fill";
export const id="dl_3f0e0c39dab24a7104fd";
export const url=new URL("../icons/window_sensor-fill.svg?v=1a09874b203722ab1b10ba789353d259e65cd6593bfeadcfb0877d110fd25745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
