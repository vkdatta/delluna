export const name="paint-bucket-light";
export const id="dl_7f6a8ca6ca1843e9b7c3";
export const url=new URL("../icons/paint-bucket-light.svg?v=7ada6dee7ee532fc7d4b3979f2db66046c2940d2375249e047451e8328209835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
