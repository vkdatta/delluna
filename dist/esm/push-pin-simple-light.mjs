export const name="push-pin-simple-light";
export const id="dl_d60a2779f0144b6791f3";
export const url=new URL("../icons/push-pin-simple-light.svg?v=d26da37eb3708472d93cf62d22015f4ca915a9456517e65b4fc2f1de2c792c64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
