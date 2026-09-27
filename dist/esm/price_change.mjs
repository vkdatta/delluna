export const name="price_change";
export const id="dl_25bdc37a69ad918693e7";
export const url=new URL("../icons/price_change.svg?v=99d287d7b6bf207f1b51b11eea64c44e4c2efb9b8491c92121e03f2c092c1a97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
