export const name="tooltip_2-fill";
export const id="dl_ae05cff8f658ab55c618";
export const url=new URL("../icons/tooltip_2-fill.svg?v=2eb78ceaece78e1204a243135c521ceb24d8f12a8a4164294202c5768e184505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
