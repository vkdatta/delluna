export const name="dashboard_2-fill";
export const id="dl_df960cd4513a2d585ced";
export const url=new URL("../icons/dashboard_2-fill.svg?v=8375787a508d066fb7ddc251597ed74cd108609ff4ad42a11b40b677be6baed2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
