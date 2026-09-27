export const name="arrow-elbow-left-light";
export const id="dl_cfa9fa22d4c24e50bf3f";
export const url=new URL("../icons/arrow-elbow-left-light.svg?v=d007c3849b4bedb06a9330c2ec21073603423351e7d384c3ba8b6aa9c95e2b42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
