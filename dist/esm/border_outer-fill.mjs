export const name="border_outer-fill";
export const id="dl_830e42e4372542724da1";
export const url=new URL("../icons/border_outer-fill.svg?v=654c844acce008c64fe0c6d6aecd2a09f258b3bba5651aede467bad476ace439",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
