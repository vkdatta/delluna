export const name="hallway-fill";
export const id="dl_55da503ba0da4ed3854f";
export const url=new URL("../icons/H/hallway-fill.svg?v=0edc2465e92fdefdd24dfd9e557957022ed2e0e186abfe5b0fe948cb8b51d4d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
