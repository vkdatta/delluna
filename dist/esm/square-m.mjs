export const name="square-m";
export const id="dl_355018d9bc06426fb063";
export const url=new URL("../icons/square-m.svg?v=996220fd577b5788f6561dcfff1d3ff34fe1de897f594de2c8e95112142993f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
