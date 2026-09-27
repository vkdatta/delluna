export const name="no_food-fill";
export const id="dl_2cbe685a8859e1d163c1";
export const url=new URL("../icons/no_food-fill.svg?v=e3e9faf3f27d1e7f9433433fd030efdaa124bd72b76a6efe52ec7f51fc8b9a66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
