export const name="smiley-angry-fill";
export const id="dl_e4b468de794043caa1ae";
export const url=new URL("../icons/S/smiley-angry-fill.svg?v=ace61c70e07c1f6d0eb1c2b3a26058029b7c58c7bf3a526cae2ef80f66d50c3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
