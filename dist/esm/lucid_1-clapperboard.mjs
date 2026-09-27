export const name="lucid_1-clapperboard";
export const id="dl_bfab0c69cd3d42689bc7";
export const url=new URL("../icons/lucid_1-clapperboard.svg?v=6bba2474ec63bb05fa89c4aedea59b2fcb18868cc213c5048dfa0fe1165c229f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
