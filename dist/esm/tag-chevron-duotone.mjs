export const name="tag-chevron-duotone";
export const id="dl_158daf6f96f893df6600";
export const url=new URL("../icons/tag-chevron-duotone.svg?v=c69b42d6afc23c5608af0fb35f2030bc4995c1e062e9319528abeb5c80f7e8f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
