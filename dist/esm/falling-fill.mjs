export const name="falling-fill";
export const id="dl_fcb1b1e4e87578455446";
export const url=new URL("../icons/falling-fill.svg?v=9f1bd832a4f3cad3d94d4eefb60241241602faeca18a169179b8d30c1f1af3ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
