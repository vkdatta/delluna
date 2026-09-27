export const name="file_present-fill";
export const id="dl_163a0ad3cfcbd344f359";
export const url=new URL("../icons/file_present-fill.svg?v=c1126d61339111d777ee5e3ff3dff8aad943ef9da10b63465ebdb90d9351daa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
