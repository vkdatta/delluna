export const name="rewind-duotone";
export const id="dl_1abd18a4f47b4ce19e7a";
export const url=new URL("../icons/rewind-duotone.svg?v=7a269e1fcd06408301f3240ca94e7a5c22af40bd004476ed6b496827200f1fa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
