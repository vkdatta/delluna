export const name="beanie-fill";
export const id="dl_194e56ebf2f04cc0bf8a";
export const url=new URL("../icons/beanie-fill.svg?v=6f384b6df108a0f9660da43e49c9876f1aa394d433456264397f27a2d5555ba1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
