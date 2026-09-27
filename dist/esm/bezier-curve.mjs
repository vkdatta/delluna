export const name="bezier-curve";
export const id="dl_f9767301df374f659715";
export const url=new URL("../icons/bezier-curve.svg?v=3e3b54b36f9690a0b7abbbe92566dbe9a3755ba34292078fbaae099f9c7fa15c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
