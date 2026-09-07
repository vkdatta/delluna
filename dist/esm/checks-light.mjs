export const name="checks-light";
export const id="dl_60215b3674694eb38efe";
export const url=new URL("../icons/checks-light.svg?v=8acc221bb38c6679f34ca9b9ed52a2d40c60fe1f2b5e23ad880c02de865f2a67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
