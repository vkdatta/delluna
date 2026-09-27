export const name="control-fill";
export const id="dl_e91bcbac9d0440d99ff9";
export const url=new URL("../icons/control-fill.svg?v=e0ee4474c43da02d482b7a7fe5099aeeea167171e833870e2ea3288788078fc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
