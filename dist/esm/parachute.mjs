export const name="parachute";
export const id="dl_c7c2afd28e5446a1bc8a";
export const url=new URL("../icons/parachute.svg?v=864d2562f873af53f6d34d07576da286425a75af28f455a87242deac00a52109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
