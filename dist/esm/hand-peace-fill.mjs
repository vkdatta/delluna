export const name="hand-peace-fill";
export const id="dl_9fe9598e64a7455ba53c";
export const url=new URL("../icons/hand-peace-fill.svg?v=051d8d6e89e0dbf5c8a90ceaaf2346f517d757fda1ded09302973964a948f439",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
