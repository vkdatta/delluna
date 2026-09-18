export const name="tsv";
export const id="dl_55b22c4734eb42718832";
export const url=new URL("../icons/T/tsv.svg?v=6fbb00b707b0f4d22dd8c426a6f0159ee363162abfe0cd5c55fdbbe45e0939e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
