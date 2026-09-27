export const name="nest_thermostat-fill";
export const id="dl_0b21d350524b8a669c80";
export const url=new URL("../icons/nest_thermostat-fill.svg?v=ce8a83176edaff782881c3bec0bf38af659359cec9c6226598b5a33287172b05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
