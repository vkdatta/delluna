export const name="battery_0_bar-fill";
export const id="dl_effcd1054076da9dad1c";
export const url=new URL("../icons/battery_0_bar-fill.svg?v=c607f550ddb6d701a4461e2be81042194fc49d4a98b59cca5e3fa3648d18b7a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
