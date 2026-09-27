export const name="vegan";
export const id="dl_2cc53eda50f94ec6911f";
export const url=new URL("../icons/vegan.svg?v=9e6a19403cbb2fe0eb5ff127c84be802096ff6d0a060155d286fd3d8c4904aeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
