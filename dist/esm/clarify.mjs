export const name="clarify";
export const id="dl_d7a634bfa0144d149e0c";
export const url=new URL("../icons/clarify.svg?v=6d823d915f9fd1a2d4b619cf97e199792f35250095b82f5bd8c27ab46e2e8299",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
