export const name="background_grid_small-fill";
export const id="dl_cecb4bd08df399f7fe62";
export const url=new URL("../icons/background_grid_small-fill.svg?v=bfde5cc3d54575163d093f4f1077069e7bbc5f94cddf5aab651c11bfec290000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
