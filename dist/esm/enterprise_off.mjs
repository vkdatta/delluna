export const name="enterprise_off";
export const id="dl_35c41b0f037a4ab7bad3";
export const url=new URL("../icons/E/enterprise_off.svg?v=f64f48116cc4fdc36eedcebec0f7d40b3d5956c0196cb10f6e883ded87357b8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
