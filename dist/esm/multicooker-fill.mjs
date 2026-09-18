export const name="multicooker-fill";
export const id="dl_8fba38cf9a594ac9b6a3";
export const url=new URL("../icons/multicooker-fill.svg?v=ad11034f2d9b59da7931e8b19935dd21b81a73a0a3272be3d3228bba0c769802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
