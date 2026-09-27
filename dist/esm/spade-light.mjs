export const name="spade-light";
export const id="dl_2d0863c6edac064e6414";
export const url=new URL("../icons/spade-light.svg?v=269116a46b00262763b420bed9f42976527ac01dad0c21dc737a7a131f5ac5ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
