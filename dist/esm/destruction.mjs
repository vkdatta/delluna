export const name="destruction";
export const id="dl_463a599546b4e06bbe30";
export const url=new URL("../icons/destruction.svg?v=38451f3d3d40d01f2cb9e8860fb4e1d3428c3d70e4aa010f27c26baed8b3d480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
