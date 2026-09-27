export const name="forum-fill";
export const id="dl_e575abe16889e57a8b35";
export const url=new URL("../icons/forum-fill.svg?v=cf7bc029a05b7f9f44f543a11c213a97b33a3d4a6bff83dd3a51dda3d94905af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
