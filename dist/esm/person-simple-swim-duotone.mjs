export const name="person-simple-swim-duotone";
export const id="dl_bc4b698f2ded437f8811";
export const url=new URL("../icons/person-simple-swim-duotone.svg?v=3ee3d0e61cf156978a317e7a12d4194656c2ca7c4c7c6fb44849fdff271b69f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
