export const name="production_quantity_limits";
export const id="dl_22e91d1de40510d104e8";
export const url=new URL("../icons/production_quantity_limits.svg?v=3fb4e8d427d0dde613ac7b81a62acd6b19882e8a33972bbd26f55a26b10fbc30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
