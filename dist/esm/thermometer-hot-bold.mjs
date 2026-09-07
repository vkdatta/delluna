export const name="thermometer-hot-bold";
export const id="dl_a0aef80d36fe430294b0";
export const url=new URL("../icons/T/thermometer-hot-bold.svg?v=41be8567ea5e4fc0ed5480f610690673fa2ca5012b260a233652e3680ff97cfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
