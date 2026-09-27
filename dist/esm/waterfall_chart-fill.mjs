export const name="waterfall_chart-fill";
export const id="dl_134498bc94fd3aabf31d";
export const url=new URL("../icons/waterfall_chart-fill.svg?v=dad1eb273a49876f96c78916d90cb46bf7ac2b9840135292c17d429ecbf3d8e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
