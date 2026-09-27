export const name="horizontal_align_left-fill";
export const id="dl_bc53bdf7cecf8e55c814";
export const url=new URL("../icons/horizontal_align_left-fill.svg?v=ab5f8e323c4b163188e3149485e300d1135fd42dd9a65567bd0387ee0d1db603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
