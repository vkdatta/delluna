export const name="lucid_3-shapes";
export const id="dl_8fccafaf263e49379859";
export const url=new URL("../icons/lucid_3-shapes.svg?v=a16017080ffa79340a63d093f34136f114516e7ca176f9c8ec90ae3932ca968f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
