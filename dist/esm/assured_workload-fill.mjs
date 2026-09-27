export const name="assured_workload-fill";
export const id="dl_677500ffdd879a103dc4";
export const url=new URL("../icons/assured_workload-fill.svg?v=41dcebaf9e74407f274f8cb7683876557a2264f3d0edbc944f1affec23654302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
