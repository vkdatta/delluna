export const name="tablet_camera";
export const id="dl_da0c67af22104e15b302";
export const url=new URL("../icons/tablet_camera.svg?v=fbf25fe0a981be5e0a9497cb27e74368cfc6718aaccd8ae9217f2591160bf742",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
