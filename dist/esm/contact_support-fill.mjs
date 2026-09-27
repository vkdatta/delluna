export const name="contact_support-fill";
export const id="dl_1c6b4806ad50ef36c8a6";
export const url=new URL("../icons/contact_support-fill.svg?v=4157bc3b4674825be1551244144d2defd4f6577db253f38b03ed52d5a541ecd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
