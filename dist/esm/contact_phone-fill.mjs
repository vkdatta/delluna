export const name="contact_phone-fill";
export const id="dl_f8e6a596dfcde774c7d3";
export const url=new URL("../icons/contact_phone-fill.svg?v=78ff938c9dec9fa56c5ddd60765e16247fbda87a77a9a4899c8cab800645b8ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
