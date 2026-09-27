export const name="pause-circle-duotone";
export const id="dl_6724071b1561428c8d61";
export const url=new URL("../icons/pause-circle-duotone.svg?v=91b33e78121da4ed94874ad0ce8bc5e473b9526a279ffdf80c339f4456890e23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
