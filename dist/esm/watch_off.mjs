export const name="watch_off";
export const id="dl_34206f5474abdd7c44cc";
export const url=new URL("../icons/watch_off.svg?v=267fb264bf8d3f977fc30f195777fd8c850f6d41dd9d37a9921fe5762d695b7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
