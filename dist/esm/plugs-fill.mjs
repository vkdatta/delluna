export const name="plugs-fill";
export const id="dl_9990da2cdfbb4bad97c9";
export const url=new URL("../icons/plugs-fill.svg?v=e5722c41327ee3c63ac95bce8a46b590124e56ed9c8a57aff53894810335b497",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
