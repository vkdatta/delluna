export const name="arrow-counter-clockwise-thin";
export const id="dl_0aa7794e7f2744c88d4b";
export const url=new URL("../icons/arrow-counter-clockwise-thin.svg?v=4890355726bd5bf775c58b090beaaf7a39a25f73801b76051d0b2ad0218e4ce3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
