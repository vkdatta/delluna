export const name="view_day-fill";
export const id="dl_0ae807cdb1c644c3b326";
export const url=new URL("../icons/V/view_day-fill.svg?v=c0e45cae424e81ff6d14f44e9586a9fa414a9a54cdefce9f5c5dd4d00b0cbc45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
