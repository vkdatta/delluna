export const name="align_vertical_bottom-fill";
export const id="dl_e1487d331e0eb967b2bb";
export const url=new URL("../icons/align_vertical_bottom-fill.svg?v=769086100269c10367663d117070de89b48d5cf8905820626980b9bfff9286dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
