export const name="graph-bold";
export const id="dl_2287915ac6f64b409b15";
export const url=new URL("../icons/graph-bold.svg?v=967c65d7659edbaf8ccdad545b8b8c9408805bf2c167377984a6c78e84a46690",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
