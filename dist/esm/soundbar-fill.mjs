export const name="soundbar-fill";
export const id="dl_813d11eee6a4cf6a3234";
export const url=new URL("../icons/soundbar-fill.svg?v=5266872ea79fc03494bdce21868f2fc6aadcb96f384f0274988ef88610f14b99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
