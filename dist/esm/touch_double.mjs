export const name="touch_double";
export const id="dl_b6c961eec2ec815603fe";
export const url=new URL("../icons/touch_double.svg?v=73fb780a61aa315df1b48cb9e37c0a9955e1b46cb815eea9f1f94f195dbb1aad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
