export const name="speaker-simple-none-duotone";
export const id="dl_eb699f488594963379a3";
export const url=new URL("../icons/speaker-simple-none-duotone.svg?v=1d55a55907337c5f0f697c25476cd61b010ac6f4bf01e714a2bbc9d52628f892",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
