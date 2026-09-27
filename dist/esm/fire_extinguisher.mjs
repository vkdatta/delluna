export const name="fire_extinguisher";
export const id="dl_0ddc4f9e907a6d841a3e";
export const url=new URL("../icons/fire_extinguisher.svg?v=8983f1a054ea6534c7b3003a6ecace817ffbb29b7992d09edd628b8457078b51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
