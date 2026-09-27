export const name="palette-fill";
export const id="dl_0eb76826866044a097b7";
export const url=new URL("../icons/palette-fill.svg?v=09d3152b4ec4293e45e22993a6c6c00fb1d83be54e324fd59d557b9c1e061dab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
