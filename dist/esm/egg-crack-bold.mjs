export const name="egg-crack-bold";
export const id="dl_be8e58e6565e4878b96a";
export const url=new URL("../icons/egg-crack-bold.svg?v=d07bf50bf6e52882747dd245b247c02fb21cfce05578dc28ca35c1c93a7de99f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
