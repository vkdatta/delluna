export const name="vector-polygon";
export const id="dl_9938956ba478471b8207";
export const url=new URL("../icons/vector-polygon.svg?v=b3cc06d4d619e1205225cdf65f8efa59fdb2d3987847fd6e84cdc31dd3f70596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
