export const name="contact_phone-fill";
export const id="dl_1d7e44738b4628e4bf82";
export const url=new URL("../icons/contact_phone-fill.svg?v=5501ac2f96345380eb061844a1e9c8900a5d06913b13e53817dc6ea0464d44f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
