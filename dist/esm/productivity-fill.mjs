export const name="productivity-fill";
export const id="dl_e14c46cd2fd94ee992a3";
export const url=new URL("../icons/productivity-fill.svg?v=a8072de03428b1545184107da0b93889d3347753d68830343ae08bf77df187e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
