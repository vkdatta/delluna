export const name="sneaker-move";
export const id="dl_bf920e0ab94d30b90f96";
export const url=new URL("../icons/sneaker-move.svg?v=763e2f333685a707bc20789d0051bd54d06848473b4628e1d2b9052696fb536f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
