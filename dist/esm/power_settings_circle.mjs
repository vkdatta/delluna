export const name="power_settings_circle";
export const id="dl_de958cf39e8210293fd8";
export const url=new URL("../icons/power_settings_circle.svg?v=8abe9ba4cf8472f91ffaf4290070dc127f415e2a78c8dac8b1b4fa2c26c364a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
