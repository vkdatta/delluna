export const name="traffic-sign-fill";
export const id="dl_a239898cac7813eadf96";
export const url=new URL("../icons/traffic-sign-fill.svg?v=6290d94410e696acc3874f9105c4abe4c7266a9d0c3cce9943c3b0b20a2a6efa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
