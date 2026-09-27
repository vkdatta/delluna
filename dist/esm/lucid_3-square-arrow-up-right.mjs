export const name="lucid_3-square-arrow-up-right";
export const id="dl_af432c267a984ab4ba3f";
export const url=new URL("../icons/lucid_3-square-arrow-up-right.svg?v=9e447d4e1654594916753cf62a370f17e356fefcee32921987065e56bf6a8007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
