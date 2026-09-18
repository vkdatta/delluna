export const name="airport_shuttle-fill";
export const id="dl_021feda3b972483fbb1a";
export const url=new URL("../icons/airport_shuttle-fill.svg?v=bce933860a6a572869b7092c8d58214caec1eaaa66d890f98995636bdba21cfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
