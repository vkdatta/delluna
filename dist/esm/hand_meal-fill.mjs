export const name="hand_meal-fill";
export const id="dl_52733f666b25fabe22d8";
export const url=new URL("../icons/hand_meal-fill.svg?v=fa958baa690cd643bd8b7300ec968a808100047ad76c1f15138aae53b35f21f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
