export const name="map-trifold-bold";
export const id="dl_a1ea68bc309e4f5e8b53";
export const url=new URL("../icons/map-trifold-bold.svg?v=78eb561f01e67b60978cb88337c094c3c9da4d07f52a6a97694f6ed368f655fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
