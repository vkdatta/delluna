export const name="export-fill";
export const id="dl_615a5c266da1433eb7ff";
export const url=new URL("../icons/export-fill.svg?v=56da5e19c1b3266a3b1112deb4729874d174bd27d60eaa922d1d99c6f7bfbd70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
