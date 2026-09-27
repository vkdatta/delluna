export const name="palette-bold";
export const id="dl_63ae6b4bafb94efea878";
export const url=new URL("../icons/palette-bold.svg?v=b062553de3eca846b27061ea51d1a5209e7e30f19052ac6267831767ce070f87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
