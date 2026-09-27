export const name="arrow-u-up-right";
export const id="dl_502575aeb8164f658f2e";
export const url=new URL("../icons/arrow-u-up-right.svg?v=edabfe840752f2cbe93f77d2f8b01f84880b02683855dbb459af5766a44f14c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
