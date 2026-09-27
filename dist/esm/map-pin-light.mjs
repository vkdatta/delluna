export const name="map-pin-light";
export const id="dl_57ec52ed318844bdbbdd";
export const url=new URL("../icons/map-pin-light.svg?v=8101833d2cf8c3e93dc8df0901972aa58730e3b8f0edcaa28a8d57c0bdbc190a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
