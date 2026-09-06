export const name="phone-call-light";
export const id="dl_0762401a68a9411c96f7";
export const url=new URL("../icons/phone-call-light.svg?v=0946b67078d8874601f9cf2940aef031966ddc544233c28494159d169857e4a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
