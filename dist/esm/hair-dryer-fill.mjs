export const name="hair-dryer-fill";
export const id="dl_944ba1f2f4164af8bca5";
export const url=new URL("../icons/hair-dryer-fill.svg?v=0f0c414cc6358667d121e7a3b0ae3d5fd71bde38581a76cf8b668edc8480065a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
