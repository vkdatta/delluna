export const name="identification-badge";
export const id="dl_0c0394ae85de4dbf8ad6";
export const url=new URL("../icons/identification-badge.svg?v=28fd589d0d04c9e51f340300b7d9f1b010b89a160d78794c86cab0480c82aaea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
