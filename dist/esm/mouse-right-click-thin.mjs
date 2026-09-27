export const name="mouse-right-click-thin";
export const id="dl_7125743817f34276bf53";
export const url=new URL("../icons/mouse-right-click-thin.svg?v=0cd71f18b31531543eed3d0c20bfa36ee9a352bdf337f5eeda2a733967ad2be0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
