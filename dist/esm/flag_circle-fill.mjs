export const name="flag_circle-fill";
export const id="dl_9cc959af1d0b123cf37d";
export const url=new URL("../icons/flag_circle-fill.svg?v=0acb667f29a8afdc512f0adfef3542a1c78717d3ec750b617c694fce62ac159f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
