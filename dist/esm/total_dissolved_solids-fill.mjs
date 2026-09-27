export const name="total_dissolved_solids-fill";
export const id="dl_90f654237f05bc787b33";
export const url=new URL("../icons/total_dissolved_solids-fill.svg?v=ba3fffb94caec8c16242561e157285465f1bf9f9c369482211396a907c77774f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
