export const name="fluid_med";
export const id="dl_ffbb92b295a063fd8e56";
export const url=new URL("../icons/fluid_med.svg?v=c341db12cec83af5a3c823a40ec67b39ed6dd44a9bca86db0021a9e0e8bad84a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
