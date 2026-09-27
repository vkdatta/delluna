export const name="three-d-fill";
export const id="dl_b6b35d0024196a999acd";
export const url=new URL("../icons/three-d-fill.svg?v=7157482662eeb2444405c948f206b11b176f95bced5f4c9af137a8676ed6cc3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
