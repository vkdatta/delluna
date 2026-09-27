export const name="tram-bold";
export const id="dl_fe201fb6f74b1f3f8703";
export const url=new URL("../icons/tram-bold.svg?v=a7f68726fd132247b2a704a2749188fdce3d74b2b9d0ef917a10b5d9104cf502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
