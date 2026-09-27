export const name="arrow-square-out-duotone";
export const id="dl_d026527688b44a72b277";
export const url=new URL("../icons/arrow-square-out-duotone.svg?v=caffecaf45d561f8f639402c125081c2d7a2fe45896d43e3bcb65fe01821e369",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
