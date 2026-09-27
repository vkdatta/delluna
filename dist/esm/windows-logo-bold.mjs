export const name="windows-logo-bold";
export const id="dl_01e8bd24ce43c3aff611";
export const url=new URL("../icons/windows-logo-bold.svg?v=d6a9a772294683344eb3cfaf071e20dde5f89cf254fded6122a444bc655d57d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
