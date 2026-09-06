export const name="plug-charging-duotone";
export const id="dl_71766a0693214212b479";
export const url=new URL("../icons/plug-charging-duotone.svg?v=69acabc0858dcb84d8b4a89419ffa98c3967bfbf5daadcf4d9e971158c86af83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
