export const name="lucid_2-funnel-x";
export const id="dl_48b921a05ee94400b5d2";
export const url=new URL("../icons/lucid_2-funnel-x.svg?v=5415b914ee4fe2ca7fa946b9c1497d5b7f90473ba3d4dcf694e0393cf6f21a6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
