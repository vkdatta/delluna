export const name="path-bold";
export const id="dl_37e5f20ad2fc4a24a20e";
export const url=new URL("../icons/path-bold.svg?v=f0fab12cec246ecd29d4c449039d49ee4f720b3ed52a0b99faacf941ec0bb5eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
