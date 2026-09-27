export const name="shift-fill";
export const id="dl_a48e21ae308074065cee";
export const url=new URL("../icons/shift-fill.svg?v=b12d72f338b08acf966102897cee47be7c9c9918f542e3a8ffe87168afc8a53c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
