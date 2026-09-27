export const name="graph_5-fill";
export const id="dl_f0bf8c2c6cd974a70adb";
export const url=new URL("../icons/graph_5-fill.svg?v=d160ae6080b16bac46fe1d2091dc79fbd5269a548fbb048b12e4ca90b95c59e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
