export const name="help_center-fill";
export const id="dl_397eb8907084bd454ac6";
export const url=new URL("../icons/help_center-fill.svg?v=769c589aa4c19255da756a3a090a20fa2fb2fef46f2b4d46f1adc4c80306a8df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
