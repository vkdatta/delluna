export const name="flag-light";
export const id="dl_60b0937d9ed14f3bb1bf";
export const url=new URL("../icons/flag-light.svg?v=c7a268fe117bc23c5dc2f50f9f47c905de33b655c04fe83cbe66f1c8e11142ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
