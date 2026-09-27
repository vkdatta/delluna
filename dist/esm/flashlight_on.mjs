export const name="flashlight_on";
export const id="dl_07f434316814b0bab43c";
export const url=new URL("../icons/flashlight_on.svg?v=c9e7a75b1d5f2961d3db64b2b39284621744c5ed2afeda1c94807c2a6161c9c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
