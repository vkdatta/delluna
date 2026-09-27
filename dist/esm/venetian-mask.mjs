export const name="venetian-mask";
export const id="dl_288ae75dbd534ef0a47b";
export const url=new URL("../icons/venetian-mask.svg?v=3d0387c596b270cb01a017df9f12b94d91f959016766bbebe6055b932d74233b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
