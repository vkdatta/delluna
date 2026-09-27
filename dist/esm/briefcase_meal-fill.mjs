export const name="briefcase_meal-fill";
export const id="dl_871a856764e6bae1ac93";
export const url=new URL("../icons/briefcase_meal-fill.svg?v=91e8b66b4457d67e5497518a195842962f7c6ed72f789ff398779974e46bc60f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
