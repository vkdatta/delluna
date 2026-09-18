export const name="oven_gen";
export const id="dl_824e6fcc95ad4e018824";
export const url=new URL("../icons/oven_gen.svg?v=8332e22b0783ea662a4875bafedf4ee8da0b012b4e787fe7848f1739ec052087",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
