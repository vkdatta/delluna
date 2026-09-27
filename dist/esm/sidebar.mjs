export const name="sidebar";
export const id="dl_3a7a1285b755a7d98f13";
export const url=new URL("../icons/sidebar.svg?v=34d2d1919dfcb47bd4405fe7e30160267270dc3f4e5cc25ed76be76c7927a0ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
