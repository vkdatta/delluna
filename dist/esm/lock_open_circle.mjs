export const name="lock_open_circle";
export const id="dl_7d254545b4a1993263ae";
export const url=new URL("../icons/lock_open_circle.svg?v=8d4919a5472c40f9c75d93eadae22417ea08a9e12c19cb956e0cc4f730b4307b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
