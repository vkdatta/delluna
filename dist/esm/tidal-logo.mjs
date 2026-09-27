export const name="tidal-logo";
export const id="dl_d49bc3ead60b50122c75";
export const url=new URL("../icons/tidal-logo.svg?v=3f2c1bda6d149934b980c1c1c9beec9104a05336f266064856e51666b6efbb6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
