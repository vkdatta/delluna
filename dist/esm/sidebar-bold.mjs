export const name="sidebar-bold";
export const id="dl_6cabe3d969d37e82d679";
export const url=new URL("../icons/sidebar-bold.svg?v=563457dbc75c82b3b729e09c4cb8d2137809e3ec706f43c00ec5ef42110a8a45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
