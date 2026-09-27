export const name="lock_open_right";
export const id="dl_164d79fa89dca1d186cd";
export const url=new URL("../icons/lock_open_right.svg?v=6713c19ba31123508bbd526c86bdaf17c3c03b661aecac0015c7829117b16723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
