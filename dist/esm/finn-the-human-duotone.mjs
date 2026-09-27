export const name="finn-the-human-duotone";
export const id="dl_ffaaafdf707c466fbb37";
export const url=new URL("../icons/finn-the-human-duotone.svg?v=d5547c0d7b3cdb767ad3c9acdb54846a157b7a6b627e3c99de33c914488cceb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
