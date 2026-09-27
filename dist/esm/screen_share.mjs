export const name="screen_share";
export const id="dl_e6627e418078a9929935";
export const url=new URL("../icons/screen_share.svg?v=9376e7bccf235a3cfcb48fb2670acb852887902d3257025b381581b9d28a0631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
