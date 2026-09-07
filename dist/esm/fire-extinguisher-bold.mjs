export const name="fire-extinguisher-bold";
export const id="dl_632caf699e134577b6be";
export const url=new URL("../icons/fire-extinguisher-bold.svg?v=1a3f24a231f518548b00fefce55970bcd67b28e3a7c4bd102735ea857db7c05c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
