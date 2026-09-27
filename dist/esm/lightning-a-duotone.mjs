export const name="lightning-a-duotone";
export const id="dl_a942935e330a43f88601";
export const url=new URL("../icons/lightning-a-duotone.svg?v=4b9bbdd171d59304032eac2364c146fa357788ee5444642ffd18d227a6633602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
