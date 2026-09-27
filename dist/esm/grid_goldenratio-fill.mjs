export const name="grid_goldenratio-fill";
export const id="dl_0da7be344bcf137b4a15";
export const url=new URL("../icons/grid_goldenratio-fill.svg?v=afde30493102645504a859e98600cea8e635231877e334b29571e84d3df443b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
