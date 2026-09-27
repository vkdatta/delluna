export const name="pentagram-duotone";
export const id="dl_ce6e788289a649b6af12";
export const url=new URL("../icons/pentagram-duotone.svg?v=e29d467c4f6bb6d3ff6b65e0f9698b779620d973081f7b8529c5f4d143353b0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
