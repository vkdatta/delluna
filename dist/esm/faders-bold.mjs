export const name="faders-bold";
export const id="dl_c7df18508a5a473dbf7b";
export const url=new URL("../icons/faders-bold.svg?v=20b952f772b18c35a2191bc37205799218e14a0eb14b0d0fb1392865612627ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
