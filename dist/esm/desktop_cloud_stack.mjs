export const name="desktop_cloud_stack";
export const id="dl_65029a86de956d97220f";
export const url=new URL("../icons/desktop_cloud_stack.svg?v=ab55833ec05b59fef4980d52a7967d22a1960abb6a090b14809dbc854742e343",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
