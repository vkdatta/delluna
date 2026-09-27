export const name="mode_fan-fill";
export const id="dl_9ab168face832041e18a";
export const url=new URL("../icons/mode_fan-fill.svg?v=d822e5be72304b3b7f8f77f88e0449d7aa2ae47b094faf2b949240560b0904ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
