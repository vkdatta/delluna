export const name="selection-light";
export const id="dl_4549d4c1e2641bc5daff";
export const url=new URL("../icons/selection-light.svg?v=0821b04d88b8ee14f11d63f64de0493102e7be3b9217159c6ef50d7f60409d4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
