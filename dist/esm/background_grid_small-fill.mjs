export const name="background_grid_small-fill";
export const id="dl_4af2900772494fc2ef6a";
export const url=new URL("../icons/background_grid_small-fill.svg?v=e9534ff0b42f247784d9969369759db72d62d2245eb66e5fdfb159330923b462",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
