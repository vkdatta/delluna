export const name="stack-simple-fill";
export const id="dl_365c7be807ac43548474";
export const url=new URL("../icons/S/stack-simple-fill.svg?v=8e13879ac0691b390d1f8edaafb7adf46a532e5b5dc07dedea81a5343edc9449",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
