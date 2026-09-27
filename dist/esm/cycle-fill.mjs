export const name="cycle-fill";
export const id="dl_57038a92636e10d9f60d";
export const url=new URL("../icons/cycle-fill.svg?v=47066b8e2aae62476e4f21b3d3e7c504e54342409597c30a4d9a59b3d685a5df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
