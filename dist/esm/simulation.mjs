export const name="simulation";
export const id="dl_6864165c6419b6722161";
export const url=new URL("../icons/simulation.svg?v=fc2476f063e6077c6dcbd91e0dfa43856e6a159133d77f0344355da3020e35f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
