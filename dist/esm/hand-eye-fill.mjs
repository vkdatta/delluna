export const name="hand-eye-fill";
export const id="dl_20698bb714ea442f8923";
export const url=new URL("../icons/hand-eye-fill.svg?v=b911b1a52bf80939f491d83cfa69330c73c4a410deb4d4e59c27ce674533fe85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
