export const name="wifi-low-light";
export const id="dl_e48d3a9a5886ba0fc38f";
export const url=new URL("../icons/wifi-low-light.svg?v=3e9b86b0c1ea63bc9e44d6aafa6e5cd11c8c12ca96f31693850562230b4af785",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
