export const name="lucid_1-chart-line";
export const id="dl_1cf978d213d0438dae4a";
export const url=new URL("../icons/lucid_1-chart-line.svg?v=6276a6fed448d3ccd88ef9bc55d1efd4fa128dd66286d4c6e9efb584b58b76cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
