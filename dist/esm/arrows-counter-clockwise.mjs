export const name="arrows-counter-clockwise";
export const id="dl_46dd0d84d4014b85af01";
export const url=new URL("../icons/arrows-counter-clockwise.svg?v=554c4bb3dccfb29da8cb3774bf84518314a41eda5eec197d3a00eeb3a6d7be4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
