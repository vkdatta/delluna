export const name="tag-simple-duotone";
export const id="dl_1a808169980252e44b88";
export const url=new URL("../icons/tag-simple-duotone.svg?v=b1be4ba5c4d6072cd501158cb4ab9b1b6fc8481acd1d1007e5694215125b00b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
