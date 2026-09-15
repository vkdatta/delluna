export const name="doorbell_3p";
export const id="dl_6324e8ce69ab4e9fa584";
export const url=new URL("../icons/D/doorbell_3p.svg?v=edac9beb80a6387ff9493657f1d89b99d034144f881be824bb042b7d5fe414aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
