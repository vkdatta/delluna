export const name="bottom_app_bar-fill";
export const id="dl_db2c3ceff22628a1ceed";
export const url=new URL("../icons/bottom_app_bar-fill.svg?v=4bb6584200f4a0c75942e490bf5abe5c6b37b3a9d0e9dc99d16f942449e95daa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
