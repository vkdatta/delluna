export const name="directions_alt_off";
export const id="dl_b1db764fb6d24b7f8d12";
export const url=new URL("../icons/directions_alt_off.svg?v=3f9d8663f7bd6c6e9057b5031731e8b6afc563f1c81726edf2602cccbda0bcda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
