export const name="circle-half-duotone";
export const id="dl_bb53989c7a0f4ae18295";
export const url=new URL("../icons/circle-half-duotone.svg?v=537f1a6e5387795291e5467a47b48f9a76147635719a1b7ce1755b50a2d1fe87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
