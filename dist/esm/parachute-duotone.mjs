export const name="parachute-duotone";
export const id="dl_18efc751d8fe4076a7d4";
export const url=new URL("../icons/parachute-duotone.svg?v=f9123e62b2b98d65c3ae3fa7a8b111c5c2d4ca319a6ae994846313203050a001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
