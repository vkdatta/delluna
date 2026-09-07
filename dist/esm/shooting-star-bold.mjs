export const name="shooting-star-bold";
export const id="dl_788ff9cc2468437fadf4";
export const url=new URL("../icons/S/shooting-star-bold.svg?v=9e0dc18e07d896de2069bd0d6a11b2ac60d1ff69bdf524cb2ef8c68631c84656",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
