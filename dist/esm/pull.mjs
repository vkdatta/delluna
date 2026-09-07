export const name="pull";
export const id="dl_677112cd414b470c84c4";
export const url=new URL("../icons/all_60_named_svgs/pull.svg?v=4b7eaeda75bd6c8d1892bfc34af18a3c24ad0c131e0e15bd1bc372b619386b1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
