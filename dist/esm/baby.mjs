export const name="baby";
export const id="dl_9b82f622618f423f94fd";
export const url=new URL("../icons/baby.svg?v=32d424b3863cdfa50d5710a4416fdaa19e2d1eeb7a84192ae2ec110d4e0737a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
