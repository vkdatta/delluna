export const name="moped_package-fill";
export const id="dl_bd221bd3407bef20c742";
export const url=new URL("../icons/moped_package-fill.svg?v=c1810c861f5c8f0d23c12c7588a8d987d498e643ea79a5758e1ae2805e232855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
