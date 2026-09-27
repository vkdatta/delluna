export const name="not-subset-of-fill";
export const id="dl_5efefad7de73453f9fb9";
export const url=new URL("../icons/not-subset-of-fill.svg?v=a908c9bd9bbcd2c6c9ab816dbdf20189a1c0abcc4606fbaaf76b3783266e58f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
