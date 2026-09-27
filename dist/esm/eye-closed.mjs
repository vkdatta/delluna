export const name="eye-closed";
export const id="dl_57a3434e217a4ef6b9ed";
export const url=new URL("../icons/eye-closed.svg?v=f116d3ecf197b88c96b1092a35315e1c1402d6e0ecdffbe4cccee8eaebaf178c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
