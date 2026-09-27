export const name="broken_image";
export const id="dl_dcf9c51132a845e8029c";
export const url=new URL("../icons/broken_image.svg?v=d6fa85ca684b4994b2a6fb980c14c39cd6810e144451303159f940019a126e1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
