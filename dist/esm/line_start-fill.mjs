export const name="line_start-fill";
export const id="dl_428ba4a4614e4848b975";
export const url=new URL("../icons/L/line_start-fill.svg?v=a041e9a06fb995cd909a97edc5e05a9174644b06d64999960dadf5ad2756b56d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
