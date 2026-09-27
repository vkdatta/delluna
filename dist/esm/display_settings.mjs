export const name="display_settings";
export const id="dl_c6b468e2176a6097ea63";
export const url=new URL("../icons/display_settings.svg?v=82dfc6c8c6e694178ffc3acad9201c4bbde88fb776d7350fdd7ba0326a14aad6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
