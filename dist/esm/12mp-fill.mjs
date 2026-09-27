export const name="12mp-fill";
export const id="dl_01519ac1e71f5a335e20";
export const url=new URL("../icons/12mp-fill.svg?v=d051700953f3c7a8d5df31f6dd09fffd9652274629100940728542823634dd13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
