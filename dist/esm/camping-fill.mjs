export const name="camping-fill";
export const id="dl_cece7a8f775b4bf37d39";
export const url=new URL("../icons/camping-fill.svg?v=3e586e2812717d94412ee201dff2eae44cf29024c54a6ab7948a0be874242417",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
