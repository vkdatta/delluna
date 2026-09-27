export const name="package-thin";
export const id="dl_8f872ad8c9cf4c35bf32";
export const url=new URL("../icons/package-thin.svg?v=7ba32b01775dfb52350efba354feba5eb7526e0de77e10ce1b7c465096f7b64b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
