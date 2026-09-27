export const name="textbox-fill";
export const id="dl_c19738d31510d67793c8";
export const url=new URL("../icons/textbox-fill.svg?v=38aeba35ba3d8f43811c0e598c3aafda63ec204602bf5d0e3af555d1e7274522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
