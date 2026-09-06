export const name="moped-front-fill";
export const id="dl_3af1d676029644329c33";
export const url=new URL("../icons/moped-front-fill.svg?v=7f86edb878fdaf04e29547ace7353c1f776d111a427b365eda5df91d81b277fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
