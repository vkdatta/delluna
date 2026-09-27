export const name="valve-fill";
export const id="dl_1152978215b0811c8af3";
export const url=new URL("../icons/valve-fill.svg?v=d8819c77f259338b3619abe02664eae93a8bd3522b3a7354840d93c51ddd9d97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
