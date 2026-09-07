export const name="wheelchair-motion-bold";
export const id="dl_861bab4b2aee486490f0";
export const url=new URL("../icons/W/wheelchair-motion-bold.svg?v=7efbc834340b03cbe8880e3f5a1711411c40a9ee8defabe30d1a51c8506c01bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
