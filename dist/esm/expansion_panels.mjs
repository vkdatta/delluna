export const name="expansion_panels";
export const id="dl_e4da1347a2267b5e3360";
export const url=new URL("../icons/expansion_panels.svg?v=cf09599825aa75629828206ada0efd7fa0510e8a92c957e560c40074a8b88c67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
