export const name="truck-fill";
export const id="dl_589a90a0d9cb2b77e321";
export const url=new URL("../icons/truck-fill.svg?v=e1556060483171eb3336affc148e1b720e1b545de39f1097670b82841e3a10b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
