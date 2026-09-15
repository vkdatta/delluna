export const name="flip_to_front-fill";
export const id="dl_0d329e790ae042b59a8c";
export const url=new URL("../icons/F/flip_to_front-fill.svg?v=6ae81273bff9f4585eee3913ccfb0c3acf5d228080633abcf46f911924e15480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
