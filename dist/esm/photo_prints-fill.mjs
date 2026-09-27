export const name="photo_prints-fill";
export const id="dl_319f2c57c28d291f77c3";
export const url=new URL("../icons/photo_prints-fill.svg?v=280205284a3d0e31c0bda6c3a7fb7545f8a6f359cca73d344ab63516e6098c35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
