export const name="television-simple-bold";
export const id="dl_97061efd32d4f2829944";
export const url=new URL("../icons/television-simple-bold.svg?v=fef54fd9937efa0db3bd411413d6719ce0f2ab4019c6f2be62847efe00b13b40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
