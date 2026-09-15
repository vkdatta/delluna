export const name="directions_bus";
export const id="dl_ed8e3fcd63c44a70b656";
export const url=new URL("../icons/D/directions_bus.svg?v=0be49fda21a97c0df969066faead5fc48cbad55bb664efafff2c1ff865be97d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
