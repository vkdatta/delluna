export const name="shapes-light";
export const id="dl_f7e370c8490368fa1ad2";
export const url=new URL("../icons/shapes-light.svg?v=ec704adea1fcf7d96527e577880f0d3b218f1227e74c616df6f8c74ea7b4ced9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
