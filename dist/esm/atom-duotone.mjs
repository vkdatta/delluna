export const name="atom-duotone";
export const id="dl_995ca1ac1bf3447c8fae";
export const url=new URL("../icons/atom-duotone.svg?v=4e719b925a17415a67f964147f8425cc4ad4d3799a748d996536a9fbdaaf21fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
