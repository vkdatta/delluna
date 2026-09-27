export const name="superset-of-duotone";
export const id="dl_d0c564dffe753b9a19b7";
export const url=new URL("../icons/superset-of-duotone.svg?v=02c85c67400defc94d35813f66f23839728fe5decacccc777280afae021760e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
