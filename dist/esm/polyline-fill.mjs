export const name="polyline-fill";
export const id="dl_4fce00da22354eb7ee5c";
export const url=new URL("../icons/polyline-fill.svg?v=d77dd51769c156bbbb93c91bad47b8d23bc9811a9b1d5d6a8e52baca2d0fefba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
