export const name="desk-light";
export const id="dl_b8dc47a58fd143009196";
export const url=new URL("../icons/desk-light.svg?v=a292b9802541824910eeba7add5d259f5691cf3663b80e16c83d2286c23e12b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
