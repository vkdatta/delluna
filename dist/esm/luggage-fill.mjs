export const name="luggage-fill";
export const id="dl_7405f2940b8143c18d3a";
export const url=new URL("../icons/luggage-fill.svg?v=7fba511f4b35229800a857429ccd6166d93abea736881378bf03244b98f2920b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
