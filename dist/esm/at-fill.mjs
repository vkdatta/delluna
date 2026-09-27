export const name="at-fill";
export const id="dl_a8946391bc9e481b9675";
export const url=new URL("../icons/at-fill.svg?v=cecc4f8177ed42e54d4ae5e84e6d5b6f56106117281a98b2703750f3bbb64fdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
