export const name="align-top-fill";
export const id="dl_4e5e932e00fb42d8a01e";
export const url=new URL("../icons/align-top-fill.svg?v=a6bf03a10dcc8984ca5c314e8d9959d6a85315041d823822e883408166f56fc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
