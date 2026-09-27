export const name="home_app_logo-fill";
export const id="dl_33c978996829072d573e";
export const url=new URL("../icons/home_app_logo-fill.svg?v=ff3f3073157438b635ffa47be4f84f1ba8ab53814b6722a8b02d24fcf45f8289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
