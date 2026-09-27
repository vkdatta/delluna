export const name="user-plus-fill";
export const id="dl_4bd9b6408a8fb0faab23";
export const url=new URL("../icons/user-plus-fill.svg?v=d8d2ab0737e5d13b65a5aa7d91091e45423871c73cb89f713c7dc4abfcae1c6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
