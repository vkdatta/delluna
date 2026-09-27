export const name="crop_5_4-fill";
export const id="dl_69600046165902abee5e";
export const url=new URL("../icons/crop_5_4-fill.svg?v=157f00164d84db35dd24ae7791c72a6fdf92a32b37cf33f6f0eb99460c91545f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
