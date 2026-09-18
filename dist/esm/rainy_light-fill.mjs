export const name="rainy_light-fill";
export const id="dl_8a4027dcbded469eb387";
export const url=new URL("../icons/rainy_light-fill.svg?v=e384b93c3d2fe056d413825d599e0176e306208c6d2bfd8510f5aa58f8bbd93c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
