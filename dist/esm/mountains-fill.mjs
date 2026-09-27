export const name="mountains-fill";
export const id="dl_31b1222bc78f4452befc";
export const url=new URL("../icons/mountains-fill.svg?v=6ebc13b06edc8d05a87c68d634e3410aaab42dfe1312bc59777952c27fdf0a95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
