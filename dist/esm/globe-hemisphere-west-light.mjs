export const name="globe-hemisphere-west-light";
export const id="dl_8a196b4761e247f3a909";
export const url=new URL("../icons/globe-hemisphere-west-light.svg?v=915e2b077ca92d90bf33fe5abfbcf1b7910398a611e7014feb4480e7961dfff6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
