export const name="top_panel_open-fill";
export const id="dl_15dcdf0600e1faa5449a";
export const url=new URL("../icons/top_panel_open-fill.svg?v=a98144cc5f5b2ae2b4277a0222d507aa88e70b7961193957e7e5cd1473d61843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
