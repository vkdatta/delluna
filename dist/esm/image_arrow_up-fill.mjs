export const name="image_arrow_up-fill";
export const id="dl_7dadff97d380ad723b35";
export const url=new URL("../icons/image_arrow_up-fill.svg?v=4c1ef47cb5fcc5308d0633ad421475f038a3d69051bff194cc4bdc9b95421fd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
