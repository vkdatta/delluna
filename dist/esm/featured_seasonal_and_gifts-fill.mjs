export const name="featured_seasonal_and_gifts-fill";
export const id="dl_5dd9ad975d354e11981a";
export const url=new URL("../icons/F/featured_seasonal_and_gifts-fill.svg?v=a5ccbf278c44d511e4e61c07375be73faaac0a111e6c15252568b3d7e5bd1ca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
