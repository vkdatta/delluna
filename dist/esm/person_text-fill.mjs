export const name="person_text-fill";
export const id="dl_35154b91a54f53897a09";
export const url=new URL("../icons/person_text-fill.svg?v=a0e1cefc780ac693b7c12be60eff3dfd1c75eb924561751f14ccd8599ef39411",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
