export const name="trail_length_short-fill";
export const id="dl_50f4d8cf89c6fae2aadd";
export const url=new URL("../icons/trail_length_short-fill.svg?v=85a4273062cec4ee105a5abe1488cdaf4fdc28cc7cbed70612948fd864d366ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
