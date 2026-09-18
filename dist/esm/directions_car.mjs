export const name="directions_car";
export const id="dl_052fd105a6e248d4981f";
export const url=new URL("../icons/directions_car.svg?v=dd7e74e58ca97a3461d89499f8d7af5ec845f7e5a0f6ed2165fd39c3dc01b849",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
