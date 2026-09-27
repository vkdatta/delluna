export const name="fitness_tracker";
export const id="dl_1737b2c569e7039f802e";
export const url=new URL("../icons/fitness_tracker.svg?v=ac9a5907603cefc14c5a0e9c4ea3b5849fcd6c972650d478235772dc75640bbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
