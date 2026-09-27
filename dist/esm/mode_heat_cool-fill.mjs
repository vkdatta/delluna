export const name="mode_heat_cool-fill";
export const id="dl_2b686732ff87f165e461";
export const url=new URL("../icons/mode_heat_cool-fill.svg?v=73f531d261cd694fd577e70b4fa73d8aa4923383cad0eba244b3ddc61fc6393e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
