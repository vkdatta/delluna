export const name="add_circle";
export const id="dl_ef9ab7e2231846bc8b65";
export const url=new URL("../icons/add_circle.svg?v=568a9a892e93032d05cff2f0865c70a42b3bb1218d0f58e8673958d2bd2a893c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
