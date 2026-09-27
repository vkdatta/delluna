export const name="position_bottom_left-fill";
export const id="dl_c0a6f400253ac2b735fd";
export const url=new URL("../icons/position_bottom_left-fill.svg?v=126e395b078ad3994d4a44a9d413bd9886a6360391d0e3f1453c3cb0037d126c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
