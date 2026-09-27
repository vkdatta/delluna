export const name="circle-dashed";
export const id="dl_d0fc016e80124d79a409";
export const url=new URL("../icons/circle-dashed.svg?v=94308464ba0f3fac937189d8b926a9b9361e753e262d2f883efb899f02dc649f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
