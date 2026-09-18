export const name="settings_cinematic_blur";
export const id="dl_3a8bac1d97464dcb898f";
export const url=new URL("../icons/settings_cinematic_blur.svg?v=81f264486e544900225875dc1b899ce45fd4213f1806778c87bed45c66c7bdbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
