export const name="gif-light";
export const id="dl_435b87d7db334be896e7";
export const url=new URL("../icons/gif-light.svg?v=a8de6bf4b3298f0e21e910d5e57c881b9c92227ee895afc831a953bd2d75891d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
