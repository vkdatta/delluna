export const name="flip_to_front-fill";
export const id="dl_9a288c6d39a46d768c44";
export const url=new URL("../icons/flip_to_front-fill.svg?v=6ae81273bff9f4585eee3913ccfb0c3acf5d228080633abcf46f911924e15480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
