export const name="local_laundry_service-fill";
export const id="dl_6da06d95b10344cb815e";
export const url=new URL("../icons/L/local_laundry_service-fill.svg?v=44a20dc270b10f9161c3e0869551eccf23890a1bf773166e144cd5accc4434f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
