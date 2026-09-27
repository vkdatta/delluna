export const name="cylinder-fill";
export const id="dl_1c4f630cf15d44a0ad55";
export const url=new URL("../icons/cylinder-fill.svg?v=70dec392c7c3128b3f44c07fa19594ee6a20e0cc6db62dfbfcb5c28604b3a51d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
