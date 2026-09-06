export const name="app-store-logo-thin";
export const id="dl_cd02fcf886694e29b772";
export const url=new URL("../icons/app-store-logo-thin.svg?v=1a46ceddcdec1da8fc03e71e1c71e45b9610347c97f0a02bcaf35901e3fdcdd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
