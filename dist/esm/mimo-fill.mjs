export const name="mimo-fill";
export const id="dl_95a346cd59baa9fca7d5";
export const url=new URL("../icons/mimo-fill.svg?v=440fc76d47e2d3aeb355f87a0288cbbd2c3edbd385b2ada68c4c016c4e68634c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
