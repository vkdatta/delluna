export const name="tornado-thin";
export const id="dl_3228f55df309cea3fcc6";
export const url=new URL("../icons/tornado-thin.svg?v=06c4cc2ca31a51d4a73be47b25de07da222c7d1f1fa5228b85864254536980cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
