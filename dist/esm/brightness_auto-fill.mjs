export const name="brightness_auto-fill";
export const id="dl_3141929037b9a548a51a";
export const url=new URL("../icons/brightness_auto-fill.svg?v=1674871a0c2005b9402991f1d92cf5edcb00ffa079f71b47e03a1194a5e455b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
