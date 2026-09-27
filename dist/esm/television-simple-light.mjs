export const name="television-simple-light";
export const id="dl_615d26bdaca9f46e0b9d";
export const url=new URL("../icons/television-simple-light.svg?v=765de92c5e4c83a73bc46b163c17e9ed1dee35771d3c1707c410c95460d513eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
