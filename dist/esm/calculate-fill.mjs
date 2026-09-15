export const name="calculate-fill";
export const id="dl_9eb754e794c54109b22d";
export const url=new URL("../icons/C/calculate-fill.svg?v=8b264a843dd87a226b195147ed1dbb140e3fab3570f3073d4bf2e188244236e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
