export const name="settings_slow_motion-fill";
export const id="dl_099c37ea54eaffed9b49";
export const url=new URL("../icons/settings_slow_motion-fill.svg?v=f47d0b1bf2397c547e272476134bcefc6cdf59ec32d17949498f44ddbc40ad46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
