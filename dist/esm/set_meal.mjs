export const name="set_meal";
export const id="dl_2f73ba38f646f5ccc2b5";
export const url=new URL("../icons/set_meal.svg?v=9c31c20df2d600f7dfcadec6dee8641c1ccc7f45cf734c99baf09680bde3fc37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
