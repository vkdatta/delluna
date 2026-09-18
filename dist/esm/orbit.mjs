export const name="orbit";
export const id="dl_95436ebc19ca4478be7b";
export const url=new URL("../icons/orbit.svg?v=f9421881f13a705f67c73c620ca04107f1ded1b27fce02810999fda4ac6f9902",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
