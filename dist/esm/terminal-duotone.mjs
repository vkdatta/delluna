export const name="terminal-duotone";
export const id="dl_c2c6c78a1c983fd52888";
export const url=new URL("../icons/terminal-duotone.svg?v=a3bffe71285cad26b4271a768ecb506bc623b6de64b4ca19b52bccd005935194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
