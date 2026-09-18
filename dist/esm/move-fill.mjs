export const name="move-fill";
export const id="dl_322c538d14f04a658f9e";
export const url=new URL("../icons/move-fill.svg?v=151637b2ece6c7ba6b658a7ad8263032151d66230f7ece595076089a9ad8ac65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
