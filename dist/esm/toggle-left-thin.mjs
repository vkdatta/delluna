export const name="toggle-left-thin";
export const id="dl_f684b33f49d021763528";
export const url=new URL("../icons/toggle-left-thin.svg?v=e4895055bcf2c00a9fe18fc6e701cc328ccfd5c8fc2605c803723b648df42e77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
