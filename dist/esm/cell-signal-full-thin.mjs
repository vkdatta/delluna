export const name="cell-signal-full-thin";
export const id="dl_7d2618d2c43145ee9fef";
export const url=new URL("../icons/cell-signal-full-thin.svg?v=f14b9654f8686f53d07c3b2430b42cb3d8f59f217630bfb1e862695c6b1b6ddf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
