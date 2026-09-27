export const name="settings_cinematic_blur-fill";
export const id="dl_49457fe3dbe46f761ef4";
export const url=new URL("../icons/settings_cinematic_blur-fill.svg?v=5258b23b389f8bea42dbb40721aa12178c6126113db29d6cc91f55501a90069e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
