export const name="couch-bold";
export const id="dl_cc49c55d3cef4b0aa6da";
export const url=new URL("../icons/couch-bold.svg?v=711a67379938fe30ae9e2e11e0ced424eb4508c5b1304a41534030eb5543fb1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
