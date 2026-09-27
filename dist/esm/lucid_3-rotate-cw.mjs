export const name="lucid_3-rotate-cw";
export const id="dl_f53d685902a9427f9b7d";
export const url=new URL("../icons/lucid_3-rotate-cw.svg?v=ebd476ef95a5fc077f49b2413689fdf12de4374c18dfd74d9e5a54a514838c37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
