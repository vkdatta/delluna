export const name="health_cross";
export const id="dl_24dbc03b6bc30c0e91a2";
export const url=new URL("../icons/health_cross.svg?v=06fa1f25b0f588c008fb9c3ea96c31e4e836619fae4fb729845a1d3783f71abe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
