export const name="landscape_2-fill";
export const id="dl_7f74bea7e19c140d340b";
export const url=new URL("../icons/landscape_2-fill.svg?v=efddce3f4624e63d88cfc406566cc89956b30138caada0ff590616378dfe7122",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
