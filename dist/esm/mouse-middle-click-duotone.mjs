export const name="mouse-middle-click-duotone";
export const id="dl_9bacb1877187429b9189";
export const url=new URL("../icons/mouse-middle-click-duotone.svg?v=ad2c4f8b78edacaefc57f25e29eefc2df1a906fe3601573dd976a7fe394df96a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
