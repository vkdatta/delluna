export const name="gear-six-light";
export const id="dl_a791a525085a483fb6b3";
export const url=new URL("../icons/gear-six-light.svg?v=fb4960550f1733d3d489add9e424e8f9a7eb8725d56c11681eb64b7ca37ab9fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
