export const name="dataset";
export const id="dl_020777461d3649d486cd";
export const url=new URL("../icons/D/dataset.svg?v=cd4414fd88eaac55205b8932bf986354d2eb1f9cbf6d0f2004554ee4e885fecf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
