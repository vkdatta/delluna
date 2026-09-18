export const name="important_devices-fill";
export const id="dl_4dcc76e3cc5d4c3b89af";
export const url=new URL("../icons/I/important_devices-fill.svg?v=ace7e846fde496dc9f6f75d3e02e935e586d67fb1cd33636913e7a83b0737783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
