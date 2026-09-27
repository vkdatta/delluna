export const name="circles-four-fill";
export const id="dl_cbf355535fb74a6eb0a6";
export const url=new URL("../icons/circles-four-fill.svg?v=99b21540a01fb698b9682c279e572e8637087f0a8196c585491d2912862f1c33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
