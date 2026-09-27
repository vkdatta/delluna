export const name="align-bottom-simple-light";
export const id="dl_9e8db7a8959441bb9dda";
export const url=new URL("../icons/align-bottom-simple-light.svg?v=a7b23001a0a0ccdec81892794f69119b0eeb3cbd55ac52fa3d1958e34175f4cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
