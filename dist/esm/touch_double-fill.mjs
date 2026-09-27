export const name="touch_double-fill";
export const id="dl_992d49e8de1ad8251ef4";
export const url=new URL("../icons/touch_double-fill.svg?v=ac57f7abaf0788dee6cb2bb98b5a6f4943d9c298ff5549af58c9918c2c25cf69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
