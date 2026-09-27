export const name="rainy_light-fill";
export const id="dl_3bfda27dfb5fc4343719";
export const url=new URL("../icons/rainy_light-fill.svg?v=969404716e898fbacd2636a03c60c27dfd21e228cb769bac80aae64c6cc6278c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
