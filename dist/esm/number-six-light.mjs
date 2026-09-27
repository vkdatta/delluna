export const name="number-six-light";
export const id="dl_119599d0862d45ffa48b";
export const url=new URL("../icons/number-six-light.svg?v=8db1f2c4cd8f6825af14eeefc7c9a06a1f3066bebdab96836be4117eea3d146b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
