export const name="battery-medium-thin";
export const id="dl_1218d3e80c0a4a5cb498";
export const url=new URL("../icons/battery-medium-thin.svg?v=b48aaf047dc1ace695097226d4afb5ac937358f4d781566f1c45707a20391c82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
