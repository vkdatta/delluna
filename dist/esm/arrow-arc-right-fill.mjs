export const name="arrow-arc-right-fill";
export const id="dl_d52e3dea9cba429599e4";
export const url=new URL("../icons/arrow-arc-right-fill.svg?v=6fe8503cf5b4f16bb0395fe65f264c3d80e36f4f9b7b7c7b91e8aca2ba1eb410",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
