export const name="list-heart-fill";
export const id="dl_91183aa6dc3a476f8265";
export const url=new URL("../icons/list-heart-fill.svg?v=1dd19dc711b85d3d69083b12b235ae722aa6f918b998e8877197cc49131c5558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
