export const name="lucid_2-globe-x";
export const id="dl_72637c085cc64601b759";
export const url=new URL("../icons/lucid_2-globe-x.svg?v=647a473c7ac584b8fc477f3676497328cbf2b6c2d2576a8792a1d0b18ba61b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
