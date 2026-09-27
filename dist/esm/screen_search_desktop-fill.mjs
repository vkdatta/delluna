export const name="screen_search_desktop-fill";
export const id="dl_b425371f6251c637ccd6";
export const url=new URL("../icons/screen_search_desktop-fill.svg?v=5fddb11200357e6d44439efeb550ee941ca8b9f226294ac2a2111f30c5eaa168",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
