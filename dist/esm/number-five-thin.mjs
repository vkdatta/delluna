export const name="number-five-thin";
export const id="dl_d45ffad162524f008360";
export const url=new URL("../icons/number-five-thin.svg?v=8ec78fa1c190a06a9251d72f3588da28c286ea771a059e4260e719530ef618de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
