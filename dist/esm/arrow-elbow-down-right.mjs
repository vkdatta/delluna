export const name="arrow-elbow-down-right";
export const id="dl_5a552c4580a04508bbdf";
export const url=new URL("../icons/arrow-elbow-down-right.svg?v=2a951b9045492a62ebb3eb5c143b0126b2afd3f6538345cb0e15d41350df4825",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
