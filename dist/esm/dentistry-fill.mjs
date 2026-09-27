export const name="dentistry-fill";
export const id="dl_c7186038206b54fce12e";
export const url=new URL("../icons/dentistry-fill.svg?v=27d7e21edd5e1045f8698b5269ef7958d36d08f791df7d4dbc31169d180dd5ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
