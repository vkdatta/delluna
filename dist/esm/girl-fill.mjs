export const name="girl-fill";
export const id="dl_35521c5d3537cfd6db23";
export const url=new URL("../icons/girl-fill.svg?v=329ccd283220ccc40d247631db021c6a0c954336afbacaf2849a2d000b95f210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
