export const name="columns-duotone";
export const id="dl_d5c97f9f11ec443184f8";
export const url=new URL("../icons/columns-duotone.svg?v=dcd4b22b5dc5b882ab6115ce25818afd35804d87c32b86e4f86bd89a0621532b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
