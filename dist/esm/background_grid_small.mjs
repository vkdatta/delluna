export const name="background_grid_small";
export const id="dl_d43f40df0bd3a798dc28";
export const url=new URL("../icons/background_grid_small.svg?v=447bace83f0deac2aa1d7f4db55543621eb13e9f5dad2a6da6c8b78d6936d933",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
