export const name="beer_meal";
export const id="dl_35d8da3a289ab5c86058";
export const url=new URL("../icons/beer_meal.svg?v=2656f5f9d8114894861259f9f5c4e87208371b3bd452158204a1e52dbd0ed076",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
