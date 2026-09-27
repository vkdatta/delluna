export const name="gas-can-light";
export const id="dl_dd2b5733734d4e16a3bb";
export const url=new URL("../icons/gas-can-light.svg?v=beb770d527194a9098645abf10b5d7c1cfa48963957106d85d07dab9554df15a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
