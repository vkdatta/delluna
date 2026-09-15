export const name="beer_meal";
export const id="dl_201f339c7516442580f3";
export const url=new URL("../icons/B/beer_meal.svg?v=51b991cb3bf6272d34f52e0153aa4a55aa10fc1b57054bf8fc3368caea86c4d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
