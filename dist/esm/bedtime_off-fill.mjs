export const name="bedtime_off-fill";
export const id="dl_5ee96ec2a3defe9cdf61";
export const url=new URL("../icons/bedtime_off-fill.svg?v=42e3ebd4b956b038685b865b39e9f441fb153d16e4a07580baff272be1711e2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
