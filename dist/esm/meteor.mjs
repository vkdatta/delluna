export const name="meteor";
export const id="dl_3414c942e1ba4042a6e0";
export const url=new URL("../icons/meteor.svg?v=82c2d867ce1584546b4ad7b4f4a4b9d2204d4b76f3dd676df71326a448e234df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
