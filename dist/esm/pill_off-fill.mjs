export const name="pill_off-fill";
export const id="dl_9903860dbb96b00280d8";
export const url=new URL("../icons/pill_off-fill.svg?v=71f530d7fc35723d51625599eedfaec02def758789a35418f977f5842d3a62da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
