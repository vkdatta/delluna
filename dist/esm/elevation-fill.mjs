export const name="elevation-fill";
export const id="dl_08551bff65907feb54a1";
export const url=new URL("../icons/elevation-fill.svg?v=952150ef98e445ee2ddbdb1000593de130d288e6ea059d57f0574e6f66bf95a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
