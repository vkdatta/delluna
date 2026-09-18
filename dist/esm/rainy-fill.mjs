export const name="rainy-fill";
export const id="dl_eccbd54c8ee54e51a997";
export const url=new URL("../icons/R/rainy-fill.svg?v=2c04b52a4c8fa94ee6cfbf6979209948ffe7658d5e37bc62eb8c31fdba0dd8b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
