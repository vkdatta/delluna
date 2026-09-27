export const name="heart-straight-break-light";
export const id="dl_b2b51941701d4197b099";
export const url=new URL("../icons/heart-straight-break-light.svg?v=dc1d579fc7ae08be293927a131d7a25597107c8c0c2842218d372423e6cffe29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
