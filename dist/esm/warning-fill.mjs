export const name="warning-fill";
export const id="dl_dbf6d413b1db49cab499";
export const url=new URL("../icons/W/warning-fill.svg?v=90595f8a478ac1f156871ac8d8a35c7c4e372b8d101dad9aeb1bceadf9a2c7f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
