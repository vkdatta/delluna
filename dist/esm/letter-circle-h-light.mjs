export const name="letter-circle-h-light";
export const id="dl_f51d4b8fb0034c7a9ecd";
export const url=new URL("../icons/letter-circle-h-light.svg?v=16e7eeba40114bc8a5aced8b26d2c70faaae2e983a5feb4d517d3d1885128286",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
