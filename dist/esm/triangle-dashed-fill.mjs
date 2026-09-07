export const name="triangle-dashed-fill";
export const id="dl_4c4a3cfcf68b43fabda0";
export const url=new URL("../icons/T/triangle-dashed-fill.svg?v=352d2c5ed71ed68132680bcb36a187d2e65592a3474daa7b78e4466a5c4e8851",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
