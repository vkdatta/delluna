export const name="lightstrip-fill";
export const id="dl_3532ab66ee41f78bb956";
export const url=new URL("../icons/lightstrip-fill.svg?v=98cb8fc0ed2711e9e8dec45054ab03c075568585c1b2e6d867dd9262f4b068dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
