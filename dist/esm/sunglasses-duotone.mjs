export const name="sunglasses-duotone";
export const id="dl_7703cab5e08d456ba515";
export const url=new URL("../icons/S/sunglasses-duotone.svg?v=03fc8a5b4b18367dff986cfdff7e7f93576fd731c5866b7cb616970af0ad9a84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
