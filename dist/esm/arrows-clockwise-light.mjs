export const name="arrows-clockwise-light";
export const id="dl_0bae66c1f61e4b24957a";
export const url=new URL("../icons/arrows-clockwise-light.svg?v=5ee88438410688544c5c52cd63d58558543f9684f95060a82d955d3d06be4e0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
