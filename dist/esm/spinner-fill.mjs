export const name="spinner-fill";
export const id="dl_68696b3974e14ed026ce";
export const url=new URL("../icons/spinner-fill.svg?v=eb92e24d3dc8ae06581ff617800323255abc83b8220057a3ee0e2922f41cf755",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
