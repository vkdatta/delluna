export const name="sidebar-simple-duotone";
export const id="dl_f645debb46fb54b6a406";
export const url=new URL("../icons/sidebar-simple-duotone.svg?v=5b067ee0fa1b571569296d78eab0a42f2c476e50d70d412e583ed45bfae8a63a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
