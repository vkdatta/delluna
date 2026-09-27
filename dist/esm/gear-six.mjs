export const name="gear-six";
export const id="dl_66eb1a4a60ba4a2aa183";
export const url=new URL("../icons/gear-six.svg?v=106525a12682f040176506d27a7c8e87b4d3dbb560e24c6feca1b6e4ceb3d3dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
