export const name="beer_meal";
export const id="dl_f0bcc5644a389439a834";
export const url=new URL("../icons/beer_meal.svg?v=cd60325d04567cdbedeea187965a95b785431e522ef2a69dc16261e9bf4e8fed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
