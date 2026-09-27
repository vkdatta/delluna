export const name="measuring_tape-fill";
export const id="dl_f53b9ad26de8754440e9";
export const url=new URL("../icons/measuring_tape-fill.svg?v=922e230a5d981f638a4d5534a68ad72cb70a14adaaef4ee3cbf14b666e847e44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
