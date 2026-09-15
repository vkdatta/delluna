export const name="draw-fill";
export const id="dl_31491d1a726e43e78093";
export const url=new URL("../icons/D/draw-fill.svg?v=18dd872210261b39caa18e26afe5b674de4e34659a88dc7af7d61a527260cc86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
