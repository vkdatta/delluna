export const name="devices-thin";
export const id="dl_70b0616c96d44dd9a3fa";
export const url=new URL("../icons/devices-thin.svg?v=386f9e06b89b61685ae3901de40c5b4c5fdadb4b6ed02a6e69d05cb86532d693",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
