export const name="change_history-fill";
export const id="dl_80463e58bc31eef85b73";
export const url=new URL("../icons/change_history-fill.svg?v=4154f31d078efe15722dc188e9b206c1e74990f7742e009716a81d129aac7d8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
