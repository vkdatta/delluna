export const name="sync_arrow_up-fill";
export const id="dl_7bb53469c34549fd9ca7";
export const url=new URL("../icons/sync_arrow_up-fill.svg?v=eb0acc9d6a1e5e492e796062a554307da8cebd0821536b089995a0de7b03921b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
