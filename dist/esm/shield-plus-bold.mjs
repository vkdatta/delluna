export const name="shield-plus-bold";
export const id="dl_571094851ed14238b249";
export const url=new URL("../icons/S/shield-plus-bold.svg?v=c929fe67e3d3c47ce0307c5d5615a51bd163b5c425037ea2ba631969e3e8cb15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
