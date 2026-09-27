export const name="fmd_bad";
export const id="dl_95f8d9a4dd69a360ab01";
export const url=new URL("../icons/fmd_bad.svg?v=f9b2d10b84c06463bebf7f705836ef0af4cc1935f0e5da64813af66fb67b0541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
