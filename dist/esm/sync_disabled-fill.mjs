export const name="sync_disabled-fill";
export const id="dl_d85c6089010fdf390a0e";
export const url=new URL("../icons/sync_disabled-fill.svg?v=145091c60dc5c1958640f48cc6f6346cbfdfc31e2fb86cb66dcd946a03020d33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
