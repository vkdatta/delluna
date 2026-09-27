export const name="local_activity-fill";
export const id="dl_62db8968bc0c60a85f23";
export const url=new URL("../icons/local_activity-fill.svg?v=8418cf07b02fb4cac61740858123162bc1cd5f9766b73fbcee3a131d57f058b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
