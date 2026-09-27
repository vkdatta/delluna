export const name="blur_linear-fill";
export const id="dl_b6d01781477bd3a86382";
export const url=new URL("../icons/blur_linear-fill.svg?v=9e7d3758ccfe3d3cc672200129529c496724a5db631484849badedb57ae28951",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
