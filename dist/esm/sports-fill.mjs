export const name="sports-fill";
export const id="dl_96fb11b894a25a839851";
export const url=new URL("../icons/sports-fill.svg?v=65dce9d440a24aa00ca7a7e03e1805166a82454f823d87633e28e3c72224c227",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
