export const name="sensor_occupied-fill";
export const id="dl_09579334e5977b96e6d3";
export const url=new URL("../icons/sensor_occupied-fill.svg?v=ea6474e6ab2914ab2d9d1ab4565dfcf171f36c471d3f431e2af59e22797018a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
