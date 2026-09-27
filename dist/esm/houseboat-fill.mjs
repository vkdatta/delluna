export const name="houseboat-fill";
export const id="dl_286970a19de8cab5cc70";
export const url=new URL("../icons/houseboat-fill.svg?v=b24b5d3d927433dbd7bf27802c1b50ca7d549ec382571bc98dff53f064406103",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
