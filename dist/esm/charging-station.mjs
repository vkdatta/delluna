export const name="charging-station";
export const id="dl_e3ce3fdab553487591aa";
export const url=new URL("../icons/charging-station.svg?v=a6c41ea8a6cc61da8a26b42b75c51cae575dadcdf77e6899e063c92da16cb7ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
