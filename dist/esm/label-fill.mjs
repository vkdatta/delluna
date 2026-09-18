export const name="label-fill";
export const id="dl_cea118ff40de452590e4";
export const url=new URL("../icons/L/label-fill.svg?v=f7e19c0d32239f7055ab9bed2ae877aa31cf8a58785fbca0648ac564a8799b04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
