export const name="circles-three-light";
export const id="dl_26154c1830c445018863";
export const url=new URL("../icons/circles-three-light.svg?v=00e26bb202eb48d94abc9e711691fd45c4fe211420e81cfc98f98f75610397a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
