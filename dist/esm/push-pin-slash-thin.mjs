export const name="push-pin-slash-thin";
export const id="dl_fb3e677af094448c890c";
export const url=new URL("../icons/push-pin-slash-thin.svg?v=dcd260c4bacdf957380a5c1410a929881e19edd4ed35ed7e4211a9988ac67a1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
