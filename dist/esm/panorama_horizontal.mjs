export const name="panorama_horizontal";
export const id="dl_b74d797b486342449f20";
export const url=new URL("../icons/panorama_horizontal.svg?v=4a85131f15c10eec6e75ea11480d44ab55790b2617fef5fbd57e7f8a67b43214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
