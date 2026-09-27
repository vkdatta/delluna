export const name="directions_bus-fill";
export const id="dl_e00ba6d375bf17588ea3";
export const url=new URL("../icons/directions_bus-fill.svg?v=709c7855443540442ace7ac1234be7a784f428d8560fd7d5f2b3deb8bbc3008a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
