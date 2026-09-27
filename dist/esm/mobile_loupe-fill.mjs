export const name="mobile_loupe-fill";
export const id="dl_874a94e4dcea52ccf24a";
export const url=new URL("../icons/mobile_loupe-fill.svg?v=5704010c7d4e5373fe3b113e74a2decc90f240a0351b622cd120621a2b65a01c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
