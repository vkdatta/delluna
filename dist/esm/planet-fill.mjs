export const name="planet-fill";
export const id="dl_b4c478b0a75f42e2914c";
export const url=new URL("../icons/P/planet-fill.svg?v=d029da15110c8d62d3cc4d1e58a6ba1ba91fd40170c8484107768ca3962c916b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
