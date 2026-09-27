export const name="enterprise-fill";
export const id="dl_67b0b593b06053ac4ce4";
export const url=new URL("../icons/enterprise-fill.svg?v=f2f69e160cacadaac8b0af645ca2c10c47fcb407c078e9bc2751707d7a83cead",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
