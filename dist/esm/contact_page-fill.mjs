export const name="contact_page-fill";
export const id="dl_4ed671740d79127498f8";
export const url=new URL("../icons/contact_page-fill.svg?v=31f0923196310bfb9247875712dd3a41e20e907f03e28d40808f419abb4220cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
