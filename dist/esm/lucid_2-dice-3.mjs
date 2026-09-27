export const name="lucid_2-dice-3";
export const id="dl_f909c83767ec4da785e8";
export const url=new URL("../icons/lucid_2-dice-3.svg?v=e5702231993ed09769e2cae4a9e611441c721f952c3c263a4216a691989549b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
