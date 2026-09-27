export const name="edit_attributes-fill";
export const id="dl_ae3ac100cce698c264c9";
export const url=new URL("../icons/edit_attributes-fill.svg?v=86de40d3c01bdc85c8955e004c50a06fe5e1fb4abea3ed51fee2f3a76f011d71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
