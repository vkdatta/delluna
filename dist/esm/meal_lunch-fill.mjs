export const name="meal_lunch-fill";
export const id="dl_57040ed180f2978a7b7a";
export const url=new URL("../icons/meal_lunch-fill.svg?v=ac6b8c12572a9eff669c84c007f64253423123b1d26b9995a924bfbd0a949ea5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
