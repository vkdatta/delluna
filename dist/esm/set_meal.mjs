export const name="set_meal";
export const id="dl_de8354332fb81bfd3289";
export const url=new URL("../icons/set_meal.svg?v=7628e2d8157216b64febbca541eca340f20632c336e0e5e7ae126f37e15847f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
