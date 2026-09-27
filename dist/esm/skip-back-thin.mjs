export const name="skip-back-thin";
export const id="dl_0bc802c094b0570929c3";
export const url=new URL("../icons/skip-back-thin.svg?v=961b2012c68579f0faf756c1fc935556b3a7248da1a4d0316832bb63d914e3c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
