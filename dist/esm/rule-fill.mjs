export const name="rule-fill";
export const id="dl_de675ee41a31abacc932";
export const url=new URL("../icons/rule-fill.svg?v=232169fba04e3bec4da39c8799a2868e11911e880fa2399c1409dd7319dbf21c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
