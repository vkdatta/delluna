export const name="cactus-fill";
export const id="dl_76a2befd333446d78670";
export const url=new URL("../icons/cactus-fill.svg?v=e1128cb9c0de26c0aa39d883c730c1f5751fbb9ef9c4b47bb2339dfc32d5143e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
