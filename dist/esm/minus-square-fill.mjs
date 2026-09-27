export const name="minus-square-fill";
export const id="dl_f739a3bcaa8c4d768530";
export const url=new URL("../icons/minus-square-fill.svg?v=02e786d7ecb7ff5f5bb45df1fb306595d1ac70933f5ae0cda2308b19594f7b59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
