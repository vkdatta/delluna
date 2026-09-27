export const name="hvac_max_defrost-fill";
export const id="dl_43876576a326f3f82c86";
export const url=new URL("../icons/hvac_max_defrost-fill.svg?v=5a781f0551e10447ebe7844a8b73d0af5397c1495614467b8ba0f7477f8ae091",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
