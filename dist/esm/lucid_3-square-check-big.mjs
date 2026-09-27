export const name="lucid_3-square-check-big";
export const id="dl_29f0028cc61f4d2aa811";
export const url=new URL("../icons/lucid_3-square-check-big.svg?v=f1a037cb5d54f133d13eb4a5457898ba65e8b3311561628960fe51d0c1f293fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
