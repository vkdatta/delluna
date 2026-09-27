export const name="parking_valet";
export const id="dl_d575ce292be6fed66abd";
export const url=new URL("../icons/parking_valet.svg?v=160120026ff7f3e9031e93ebaff76925bf57514fa8e31ff2ab812ec392be50a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
