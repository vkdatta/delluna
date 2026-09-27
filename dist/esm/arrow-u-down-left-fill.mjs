export const name="arrow-u-down-left-fill";
export const id="dl_27b5c2b397174cf6b95a";
export const url=new URL("../icons/arrow-u-down-left-fill.svg?v=d371f1ff12be40733d523c8810005e2e3de6728c3d0f102c1bd573ad292efdbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
