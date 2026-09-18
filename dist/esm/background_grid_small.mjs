export const name="background_grid_small";
export const id="dl_f5cfd203d4a14257a524";
export const url=new URL("../icons/background_grid_small.svg?v=bb8100c52aa7fa899bc844642d3b1852ff28ed6a42992e3fd4ee3284b3b375cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
