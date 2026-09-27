export const name="salinity";
export const id="dl_8b8e74fe5e2a53fae213";
export const url=new URL("../icons/salinity.svg?v=0dff99d72908fbaa027f84fbded4c6da6b947d8357c3e91872490a32f842c7ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
