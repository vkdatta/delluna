export const name="keyboard_tab-fill";
export const id="dl_0ed31ba7a6750400e479";
export const url=new URL("../icons/keyboard_tab-fill.svg?v=eb754de15e350034817c751ce0f3e2816301dd1d2d064112cba21cafa5ac711a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
