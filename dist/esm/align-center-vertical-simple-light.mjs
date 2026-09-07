export const name="align-center-vertical-simple-light";
export const id="dl_99da8429a21b439fa715";
export const url=new URL("../icons/align-center-vertical-simple-light.svg?v=0f75bce91146b09b285405a6648a442cde73fc72ec78a649f3c8cbf2f645e610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
