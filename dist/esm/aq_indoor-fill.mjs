export const name="aq_indoor-fill";
export const id="dl_78dc18f6eeed6e87b0c5";
export const url=new URL("../icons/aq_indoor-fill.svg?v=0d833bd3d38e89eed4e5b79ec7b1db9a5ef2ab6b8f30fef247b490ca278640bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
