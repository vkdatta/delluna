export const name="person-simple-swim";
export const id="dl_5380690f1645483183f4";
export const url=new URL("../icons/person-simple-swim.svg?v=dab5f462236aa9e03330b4c907dddd7941ffb10d1e92d1c85cbb2e2646e5fcfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
