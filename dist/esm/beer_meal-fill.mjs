export const name="beer_meal-fill";
export const id="dl_361c3fa61dc4d6e700df";
export const url=new URL("../icons/beer_meal-fill.svg?v=03eacfecc9e79dbc6a90b31ff091d7f760048b3effa957dd344cc67286539a17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
