export const name="grid_on";
export const id="dl_e5756a87bbdae94c5865";
export const url=new URL("../icons/grid_on.svg?v=096ef3217d2b3d63e4f1a11b98241a622bca60cf1b40c25263f9545ad05cb83b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
