export const name="polygon-light";
export const id="dl_b5997c1886df4c7296bd";
export const url=new URL("../icons/polygon-light.svg?v=aa3994897e463ffb957571ed29d3a8241c568e9445b552c5b9b142046f54ca70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
