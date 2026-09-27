export const name="moving_ministry-fill";
export const id="dl_870a78a55aa9761677b5";
export const url=new URL("../icons/moving_ministry-fill.svg?v=5ee59749523de4f3b1f8c09c1115e01c80cbd029091162e151fe8626abd894b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
