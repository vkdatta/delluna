export const name="airlines";
export const id="dl_b8924a137b334e768185";
export const url=new URL("../icons/A/airlines.svg?v=5116331250573daf6bfe5f6400816f4c184e6135b7cc0f8047d70092d3a4ae6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
