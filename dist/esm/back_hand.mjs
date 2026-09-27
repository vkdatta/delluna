export const name="back_hand";
export const id="dl_5d778b634cb9dcf838b6";
export const url=new URL("../icons/back_hand.svg?v=0d2f1f8503f5d561b1db7ee476e80cfb5495ccd1d6bd40d0125ccd79fe532adb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
