export const name="fence-fill";
export const id="dl_e7cf0cf2e560d7b65824";
export const url=new URL("../icons/fence-fill.svg?v=8e3d01075d8408e3c7018a82328ec80d6bd2976a42eb43bdaaec4cf95aff1b02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
