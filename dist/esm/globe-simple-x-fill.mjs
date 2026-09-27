export const name="globe-simple-x-fill";
export const id="dl_befb488d88e9481bba55";
export const url=new URL("../icons/globe-simple-x-fill.svg?v=65ed459705bd7dae3f3327580583c685ee09e0fa0af74c13d1b3ed2bcbe32000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
