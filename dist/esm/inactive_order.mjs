export const name="inactive_order";
export const id="dl_0b9e00faf0c7b8effba7";
export const url=new URL("../icons/inactive_order.svg?v=e91299f6e62c3e01c2dc9f655135ff950474ae565365f276b5f268bb4f587e03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
