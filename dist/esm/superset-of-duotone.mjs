export const name="superset-of-duotone";
export const id="dl_6879dae15af94012ad15";
export const url=new URL("../icons/S/superset-of-duotone.svg?v=02c85c67400defc94d35813f66f23839728fe5decacccc777280afae021760e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
