export const name="arrows_up_down_circle";
export const id="dl_d90829641eff4ab0b4bc";
export const url=new URL("../icons/A/arrows_up_down_circle.svg?v=2e8ad8bda1648798565881fd8a7b849ac2e8a64a727c9f57f368aee9839664b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
