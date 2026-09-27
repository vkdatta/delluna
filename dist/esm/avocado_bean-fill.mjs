export const name="avocado_bean-fill";
export const id="dl_c0862c3686dd74534e7d";
export const url=new URL("../icons/avocado_bean-fill.svg?v=1d656ba094a44f78229007889182c92ed7014282fab4970a1f710727591856b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
