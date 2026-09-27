export const name="antigravity";
export const id="dl_d9582d33d47576005002";
export const url=new URL("../icons/antigravity.svg?v=8dc2c205afc3ad03a996e7fbb09ef4f4fc407af7c426c39e733e3ca830d2fab4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
