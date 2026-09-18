export const name="place_item-fill";
export const id="dl_595e270bdc364183b529";
export const url=new URL("../icons/P/place_item-fill.svg?v=ed4e10824cb164526d948f78e3622b14f22a65d24840a7117b1a549603d3eaac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
