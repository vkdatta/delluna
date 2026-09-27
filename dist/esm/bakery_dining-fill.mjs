export const name="bakery_dining-fill";
export const id="dl_891aa4ac2f7bfb87d5aa";
export const url=new URL("../icons/bakery_dining-fill.svg?v=f157533074800cf5b9221ba79a7b4905dc130a4658cde895c29b83441aa5c9e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
