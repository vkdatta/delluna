export const name="alarm-duotone";
export const id="dl_692cd3eae7814c3e87a1";
export const url=new URL("../icons/alarm-duotone.svg?v=7a1498d0442217295ee2b5dfe41ad6475106dde3733be4956fcfea130c1046d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
