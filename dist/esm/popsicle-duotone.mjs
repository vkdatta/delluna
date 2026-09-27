export const name="popsicle-duotone";
export const id="dl_f6823ab6c38a434e9612";
export const url=new URL("../icons/popsicle-duotone.svg?v=ff853f5c0796db3f80d6ccf708153e6f9173731f9959d9c3075605e8bc422b87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
