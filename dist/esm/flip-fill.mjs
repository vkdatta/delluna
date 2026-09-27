export const name="flip-fill";
export const id="dl_a6abd9bb508738c0be93";
export const url=new URL("../icons/flip-fill.svg?v=f2650532b3f3430c457e1761a8f7e116566e382ef68b1758abd2df23925c5953",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
