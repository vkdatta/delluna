export const name="arrow-square-down-light";
export const id="dl_c39699f5648c47698c3c";
export const url=new URL("../icons/arrow-square-down-light.svg?v=1ee11c4efe19762a2a2e7d774c68710393bdfcc7c0d57b6e5aaadba8386a891b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
