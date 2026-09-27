export const name="chart-scatter-light";
export const id="dl_608094f264bc4df4ad35";
export const url=new URL("../icons/chart-scatter-light.svg?v=5c96fba0a3ddc07b9ea460d9122d5f5a412d332809458d9025bd195cb0ffe90e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
