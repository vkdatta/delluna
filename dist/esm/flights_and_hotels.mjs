export const name="flights_and_hotels";
export const id="dl_1b40a0e2bbf11c338f2f";
export const url=new URL("../icons/flights_and_hotels.svg?v=e0a0986e3e22c8bfb2003146202e925a8de8885f9943ef89eeb0e0ff130cbbc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
