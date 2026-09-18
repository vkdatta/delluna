export const name="nest_farsight_cool";
export const id="dl_6a5ad3e2823e48308b4a";
export const url=new URL("../icons/N/nest_farsight_cool.svg?v=f6045aaede05fc6c77d0d27b7f2c5629d10053628958cad593264a5563ffb1a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
