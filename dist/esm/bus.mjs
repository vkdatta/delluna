export const name="bus";
export const id="dl_52a1601de1f14d798d2e";
export const url=new URL("../icons/bus.svg?v=58656edca181815547882fe2c2ab01211067b9e08bc8252460cb43600b00ff43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
