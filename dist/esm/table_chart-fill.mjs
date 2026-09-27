export const name="table_chart-fill";
export const id="dl_320afe753d6b41cfcd2d";
export const url=new URL("../icons/table_chart-fill.svg?v=198918c0e65084a686f744080a54cdc32289ea2c2a4e9183ca0e88e94f9428ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
