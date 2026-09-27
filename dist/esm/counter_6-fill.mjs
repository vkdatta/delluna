export const name="counter_6-fill";
export const id="dl_69220a66f7ab4cb10b9b";
export const url=new URL("../icons/counter_6-fill.svg?v=b78ff9614c7979706a1a1081ce5f5ef2f90e3846235489cdabe7d97160229748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
