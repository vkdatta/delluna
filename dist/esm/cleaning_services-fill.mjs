export const name="cleaning_services-fill";
export const id="dl_d64769a9a21245f68337";
export const url=new URL("../icons/cleaning_services-fill.svg?v=cfeeadd044f7dda97c7db820ddfe75eb6dde87009299220aec28e0d2d502b30e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
