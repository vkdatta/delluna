export const name="flame-fill";
export const id="dl_f32627eb9dc144d3b1e4";
export const url=new URL("../icons/flame-fill.svg?v=134613f6eaf92e12c8e3d261cefdbf58308c23e48e0dadbadc70b73e87144a3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
