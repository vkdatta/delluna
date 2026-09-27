export const name="skillet_cooktop-fill";
export const id="dl_19831fc19d16eb56de23";
export const url=new URL("../icons/skillet_cooktop-fill.svg?v=2ae41d0fc8c0630b2cf4bc2be81b05413a1747cccddd6f9ece4a093344d3c703",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
