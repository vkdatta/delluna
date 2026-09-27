export const name="heart-break-fill";
export const id="dl_93e6de80f9e1445f8034";
export const url=new URL("../icons/heart-break-fill.svg?v=b7adeae9101fa1e5fbc773e2d297202b6818f320e254eb10bf728d2f41ea97a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
