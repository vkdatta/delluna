export const name="list-dashes-fill";
export const id="dl_2ee065b6d4e345c190de";
export const url=new URL("../icons/list-dashes-fill.svg?v=4f6d94241bc81efb14ee0c2c7f4d85aa1d1afe817b216cc74652d8cdfe706202",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
