export const name="perspective-duotone";
export const id="dl_5e266d6dc89f409eb870";
export const url=new URL("../icons/perspective-duotone.svg?v=68d3f8f080d3c111d98dff4724d446c77c2d0388e731bfd87254f20e559daea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
