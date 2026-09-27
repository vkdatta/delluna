export const name="mobile_sound_off-fill";
export const id="dl_9ee4b3bd0e7aa0cb59cb";
export const url=new URL("../icons/mobile_sound_off-fill.svg?v=bcb199f29453830dbcd32d3613c71e6e11781a64f9fbd12e1c086fc9b6159d93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
