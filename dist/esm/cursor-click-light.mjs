export const name="cursor-click-light";
export const id="dl_7f09dce56a4d40789434";
export const url=new URL("../icons/cursor-click-light.svg?v=f11e4a3394bc89f64f4e2803876acc690e29f6c990f3b189166ba548dc9dac45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
