export const name="circles-three-light";
export const id="dl_26154c1830c445018863";
export const url=new URL("../icons/circles-three-light.svg?v=c197b1844b4089833c442b74cb8fcfb0e407a88a80ce40de60cb8347761cb501",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
