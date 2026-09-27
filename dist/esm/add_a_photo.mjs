export const name="add_a_photo";
export const id="dl_4a27fe26371801e0d770";
export const url=new URL("../icons/add_a_photo.svg?v=f2430626cfc95f5654b7d0a43f0b3766878ea81944526c7a1b858eb7a8f1ebba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
