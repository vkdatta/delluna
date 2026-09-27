export const name="remove-fill";
export const id="dl_067028b629f41d1eea46";
export const url=new URL("../icons/remove-fill.svg?v=69659565414ca2576cec96acd020bc5f9eef2e1cda9818071bcf71d989513a48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
