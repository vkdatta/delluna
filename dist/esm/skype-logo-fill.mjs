export const name="skype-logo-fill";
export const id="dl_8330e67a6edace864406";
export const url=new URL("../icons/skype-logo-fill.svg?v=04b157b23fdf860ace7bccd23449f5049614044e37fe21b5749e4b443c165ee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
