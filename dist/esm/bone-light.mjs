export const name="bone-light";
export const id="dl_4b6bffc8699f49d4bd5e";
export const url=new URL("../icons/bone-light.svg?v=f137c68e65397b5ecb1c1397e383c00bf41104dd23b42192a0555e2f68374054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
