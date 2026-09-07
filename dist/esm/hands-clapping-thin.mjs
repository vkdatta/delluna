export const name="hands-clapping-thin";
export const id="dl_e1b283cc00214d779bac";
export const url=new URL("../icons/hands-clapping-thin.svg?v=3435319dfd64ab5377c24063402f7f19e6427ec146359516484af991bbf30d5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
