export const name="hoodie-bold";
export const id="dl_bcd7ba1abfa5416db525";
export const url=new URL("../icons/hoodie-bold.svg?v=8431c23822ecd79b2fe5d7914bd96e92c28bdfd0269a3713945e36ca07c12d32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
