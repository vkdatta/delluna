export const name="e911_avatar-fill";
export const id="dl_b80e16ad88c34e7dae21";
export const url=new URL("../icons/E/e911_avatar-fill.svg?v=2817c78f815f515e3df92e2b06383396860df48e3ba1c5b5f02002b8d1d63534",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
