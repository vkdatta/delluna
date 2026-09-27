export const name="highlighter-light";
export const id="dl_7e844f8f50bc4f008d73";
export const url=new URL("../icons/highlighter-light.svg?v=e2cea3432d7899f27cab01caadf81b0f74740e4eeacc519bf9e93d9c30a2a5ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
